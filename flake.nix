{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };
  outputs = { self, nixpkgs, ... }:
    let
      lib = nixpkgs.lib;
      forAllSystems = f: lib.genAttrs lib.systems.flakeExposed (system: f (
        import nixpkgs {
          inherit system;
        }
      ));
      version = "nfits-patches";
    in
    rec {
      packages = forAllSystems
        (pkgs:
          rec {
            mantine = (pkgs.callPackage ./yarn-project.nix { } { src = pkgs.lib.cleanSource ./.; }).overrideAttrs (old: {
                buildPhase = ''
                  patchShebangs .
                  yarn setup
                  yarn build all
                '';

                installPhase = ''
                  mkdir -p $out
                  
                  for dir in ./packages/\@mantine/*; do
                    pushd .
                    cd $dir
                    yarn pack --filename $out/%s-${version}.tgz
                    popd
                  done
                '';
            });
          });
      devShells = forAllSystems (pkgs:
        let
          packages = self.packages.${pkgs.system};
        in
        {
          default = pkgs.mkShell rec {
            inputsFrom = [ packages.mantine ];
          };
        });
    };
}

{ pkgs }: {
	deps = [
		pkgs.gti
  pkgs.gh
  pkgs.nodejs-16_x
        pkgs.nodePackages.typescript-language-server
        pkgs.yarn
        pkgs.replitPackages.jest
	];
}
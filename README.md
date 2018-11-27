# Materia Theme for UCF

This repository contains the customized theme for the Materia server at UCF.

Visit the [Materia Documentation](https://ucfopen.github.io/Materia-Docs) for more information.

## Installing Theme into Materia

Add a custom repository to your Composer config:

`composer config repositories.ucftheme '{"type": "package", "package": { "name": "ucfopen/materia-theme-ucf", "type": "fuel-package", "version": "1.0.0", "source": { "no-api": true, "url": "https://github.com/ucfopen/Materia-Theme-UCF.git", "type": "git", "reference": "master"}}}'`

Then add the package as a dependency:

`composer require ucfopen/materia-theme-ucf:1.0.0 --no-update`

Then ask Composer to update: 

`composer update --optimize`

> Note: if this is a production deploy you may want to add `--no-dev` to the update command.

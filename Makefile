SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.DELETE_ON_ERROR:
MAKEFLAGS += --warn-undefined-variables
MAKEFLAGS += --no-builtin-rules

.PHONY: default
default: clean build/ui-bundle.zip

.PHONY: bootstrap
bootstrap:
	brew install yarn

yarn.lock:
	yarn install

node_modules/.yarn-integrity: yarn.lock package.json
	yarn install

.PHONY: clean
clean: node_modules/.yarn-integrity
	yarn gulp clean

.PHONY: preview
preview: node_modules/.yarn-integrity
	yarn gulp preview

build/ui-bundle.zip: gulp.d/ gulpfile.js node_modules/.yarn-integrity src/ tailwind.config.js
	yarn gulp bundle

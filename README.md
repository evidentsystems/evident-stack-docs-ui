# docs-ui

Repository that provides the Antora UI and theme for the Evident Stack
documentation site, based on the [default Antora UI
Bundle](https://docs.antora.org/antora-ui-default/) modified to use
Tailwind CSS.

## Usage

During development, run and auto-reloading preview via:

``` sh
make preview
```

When ready to build, run the default make target (which passes through to `make clean build`):

``` sh
make
```

## References

Also look to the Couchbase UI repo for inspiration: https://github.com/couchbase/docs-ui/

Here is their released bundle area: https://github.com/couchbase/docs-ui/releases

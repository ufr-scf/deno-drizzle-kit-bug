# deno-drizzle-kit-bug

While setting up a project using deno and drizzle I encountered the following error when running `deno -A npm:drizzle-kit generate`:

```
Cannot find module 'npm:drizzle-kit'
Require stack:
- /workspaces/deno-drizzle-kit-bug/drizzle.config.ts
- /home/node/.cache/deno/npm/registry.npmjs.org/drizzle-kit/0.31.1/bin.cjs
```

I found this issue which seems to be related: [npm compat: unable to use "npm:drizzle-kit" cli tool #19826
](https://github.com/denoland/deno/issues/19826).

Following the recommendation to use `--node-modules-dir` does not help, `deno -A --node-modules-dir npm:drizzle-kit generate` still produces an error:

```
Warning The following packages are deprecated:
┠─ npm:@esbuild-kit/core-utils@3.3.2 (Merged into tsx: https://tsx.is)
┖─ npm:@esbuild-kit/esm-loader@2.6.5 (Merged into tsx: https://tsx.is)
No config path provided, using default 'drizzle.config.ts'
Reading config file '/workspaces/deno-drizzle-kit-bug/drizzle.config.ts'
Cannot find module 'npm:drizzle-kit'
Require stack:
- /workspaces/deno-drizzle-kit-bug/drizzle.config.ts
- /workspaces/deno-drizzle-kit-bug/node_modules/.deno/drizzle-kit@0.31.1/node_modules/drizzle-kit/bin.cjs
```

I've also tried installing `npm:drizzle-kit` in advance, but that did not seem to help either.

Running on Debian 12 (devcontainer), `deno --version` gives me:

```
deno 2.3.6 (stable, release, x86_64-unknown-linux-gnu)
v8 13.7.152.6-rusty
typescript 5.8.3
```

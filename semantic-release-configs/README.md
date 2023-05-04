# Semantic release configs

[semantic-release](https://semantic-release.gitbook.io/semantic-release/usage/configuration) is a tool used to manage versioning and releasing an artifact in a CI/CD environment.

Here are some example configurations to get you started.

When copying these configurations to your repo, they should exist in the root of your project, and be renamed to be one of the [accepted names](https://semantic-release.gitbook.io/semantic-release/usage/configuration#configuration-file)

- Java
  - [Docker](./java/docker-image.releaserc.json)
  - [Maven deploy](./java/mvn-deploy.releaserc.json)

The java configurations set the version of the package they are deploying. To do this, the `pom.xml` should include a `revision` property and a `version` tag pointed to that revision. e.g.

```xml
<version>${revision}</version>

<properties>
    <revision>1.0.0-SNAPSHOT</revision>
    ...
</properties>
```

- Javascript
  - [Docker](./js/docker-image.release.config.js)
  - [NPM](./js/npm.release.config.js)

## semantic-release-teams

[Github link](https://github.com/argodevops/semantic-release-teams)
semantic-release-teams is a plugin developed to notify one or more teams channels of releases via a webhook.

## Gotchas

### Git tags and versions

semantic-release uses tags and git notes to determine previous releases. If you have already published releases, you should `git tag` the last known commit with the version number in the format `vX.Y.Z` from there, semantic release should manage your versions accordingly. It is worth trying a release from a prerelease branch first, `alpha` is listed in the configurations already for this purpose.

### Plugins and lifecycle methods

semantic-release will group the lifecycle methods of all the plugins and run them in the order they appear in your config. For instance if two plugins run a `prepareCmd` and `publishCmd`, semantic-release will run both `prepareCmd` methods in the order they appear in your configuration, and then do the same with the `publishCmd` methods.

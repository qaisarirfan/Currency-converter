# Currency converter

## Installation 😄

- Clone/download the project
- From the project directory, run`npm install` or `yarn install`

## Running 🚀️

- iOS: `npm run ios`/`yarn run ios`
- Android: `npm run android`/`yarn run android`

### User login credentials

- username `admin@admin.com`
- password `admin`

#### How to contribute?

- *Fork* a repository.
- *Cloning* a repository.
- Create a *branch*.
- Making the changes.
- *Add* & *Commit* the Changes
- *Push* the changes.
- Make a* Pull Request(PR)*
- furthermore, please check this [link](https://blog.usejournal.com/how-to-contribute-to-open-source-software-with-git-github-2b3be6e36c82)

### How do I update a GitHub forked repository?

In your local clone of your forked repository, you can add the original GitHub repository as a "remote". ("Remotes" are like nicknames for the URLs of repositories - `origin` is one, for example.) Then you can fetch all the branches from that upstream repository, and rebase your work to continue working on the upstream version. In terms of commands that might look like:

```
# Add the remote, call it "upstream":

git remote add upstream https://github.com/whoever/whatever.git

# Fetch all the branches of that remote into remote-tracking branches,
# such as upstream/master:

git fetch upstream

# Make sure that you're on your master branch:

git checkout master

# Rewrite your master branch so that any commits of yours that
# aren't already in upstream/master are replayed on top of that
# other branch:

git rebase upstream/master
```

If you don't want to rewrite the history of your master branch, (for example because other people may have cloned it) then you should replace the last command with `git merge upstream/master`. However, for making further pull requests that are as clean as possible, it's probably better to rebase.

---

If you've rebased your branch onto `upstream/master` you may need to force the push in order to push it to your own forked repository on GitHub. You'd do that with:

```
git push -f origin master
```

You only need to use the `-f` the first time after you've rebased.


## styled-components

`styled-components` is integrated 😄

## Jest test 🚀️

* `yarn run test` for tests
* `yarn run test --coverage` with coverage

File                               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------------------|---------|----------|---------|---------|----------------------
All files                          |   72.72 |    53.15 |   44.71 |   75.87 |
 jest                              |   88.88 |      100 |   66.66 |   88.88 |
  assetsTransformer.js             |   66.66 |      100 |       0 |   66.66 | 5
  testUtils.js                     |     100 |      100 |     100 |     100 |
 src                               |     100 |       50 |     100 |     100 |
  constants.js                     |     100 |       50 |     100 |     100 | 9
 src/App                           |      85 |       50 |      50 |      85 |
  index.js                         |      85 |       50 |      50 |      85 | 30-31,59
 src/components/ConversionInput    |     100 |      100 |     100 |     100 |
  index.js                         |     100 |      100 |     100 |     100 |
  styles.js                        |     100 |      100 |     100 |     100 |
 src/components/CustomStatusBar    |     100 |       50 |     100 |     100 |
  index.js                         |     100 |      100 |     100 |     100 |
  styles.js                        |     100 |       50 |     100 |     100 | 4
 src/components/HeaderBar          |     100 |      100 |     100 |     100 |
  index.js                         |     100 |      100 |     100 |     100 |
  styles.js                        |     100 |      100 |     100 |     100 |
 src/components/KeyboardSpacer     |   54.16 |    33.33 |   33.33 |   54.16 |
  index.js                         |   52.17 |    33.33 |   33.33 |   52.17 | 12-19,25-26,32-33,46
  styles.js                        |     100 |      100 |     100 |     100 |
 src/components/Logo               |     100 |      100 |     100 |     100 |
  index.js                         |     100 |      100 |     100 |     100 |
  styles.js                        |     100 |      100 |     100 |     100 |
 src/components/ReverseButton      |     100 |      100 |      50 |     100 |
  index.js                         |     100 |      100 |      50 |     100 |
  styles.js                        |     100 |      100 |     100 |     100 |
 src/components/RowItem            |     100 |       50 |      75 |     100 |
  index.js                         |     100 |       50 |   66.66 |     100 | 20
  styles.js                        |     100 |      100 |     100 |     100 |
 src/configure                     |     100 |      100 |     100 |     100 |
  i18n.js                          |     100 |      100 |     100 |     100 |
 src/redux                         |     100 |      100 |     100 |     100 |
  utility.js                       |     100 |      100 |     100 |     100 |
 src/redux/middleware              |     100 |      100 |     100 |     100 |
  actions.js                       |     100 |      100 |     100 |     100 |
 src/redux/reducers/authentication |      60 |      100 |   14.28 |      80 |
  actionCreators.js                |       0 |      100 |       0 |       0 | 4-10
  actions.js                       |     100 |      100 |     100 |     100 |
  selectors.js                     |      60 |      100 |      20 |     100 |
 src/redux/reducers/conversion     |   61.53 |       40 |   41.66 |   66.66 |
  actionCreators.js                |      60 |      100 |      20 |     100 |
  actions.js                       |     100 |      100 |     100 |     100 |
  index.js                         |   36.84 |        0 |      30 |   38.88 | 46,71-110
  selectors.js                     |   76.47 |       50 |   66.66 |      80 | 20-21
 src/redux/reducers/languages      |      75 |      100 |   33.33 |   71.42 |
  actionCreators.js                |       0 |      100 |       0 |       0 | 5
  actions.js                       |     100 |      100 |     100 |     100 |
  index.js                         |   66.66 |      100 |       0 |   66.66 | 12
  selectors.js                     |     100 |      100 |     100 |     100 |
 src/redux/reducers/navigation     |      75 |      100 |   33.33 |   71.42 |
  actionCreators.js                |       0 |      100 |       0 |       0 | 4
  actions.js                       |     100 |      100 |     100 |     100 |
  index.js                         |   66.66 |      100 |       0 |   66.66 | 10
  selectors.js                     |     100 |      100 |     100 |     100 |
 src/redux/reducers/themes         |    92.3 |      100 |      80 |    90.9 |
  actionCreators.js                |     100 |      100 |     100 |     100 |
  actions.js                       |     100 |      100 |     100 |     100 |
  index.js                         |      75 |      100 |       0 |      75 | 17
  selectors.js                     |     100 |      100 |     100 |     100 |
 src/screens/CurrencyList          |      50 |       25 |   33.33 |      50 |
  index.js                         |   46.42 |       25 |      25 |   46.42 | 27,55-107
  styles.js                        |     100 |      100 |     100 |     100 |
 src/screens/Home                  |   73.52 |       55 |      25 |   78.12 |
  index.js                         |   70.96 |       55 |   18.18 |   75.86 | 49,68-127
  styles.js                        |     100 |      100 |     100 |     100 |
 src/screens/Languages             |      65 |      100 |   42.85 |      65 |
  index.js                         |   61.11 |      100 |   33.33 |   61.11 | 33-38,55
  styles.js                        |     100 |      100 |     100 |     100 |
 src/screens/Login                 |      50 |    41.66 |      30 |   57.14 |
  index.js                         |   42.85 |    41.66 |   22.22 |      50 | 51-65,109
  styles.js                        |     100 |      100 |     100 |     100 |
 src/screens/Options               |   72.72 |      100 |      40 |   72.72 |
  index.js                         |   66.66 |      100 |      25 |   66.66 | 33-45
  styles.js                        |     100 |      100 |     100 |     100 |
 src/screens/Themes                |   91.66 |       75 |      75 |   91.66 |
  index.js                         |      90 |       75 |   66.66 |      90 | 40
  styles.js                        |     100 |      100 |     100 |     100 |
 src/services/i18n                 |   71.42 |      100 |      50 |   71.42 |
  index.js                         |     100 |      100 |     100 |     100 |
  language-detector.js             |   33.33 |      100 |       0 |   33.33 | 7-8
 src/utils                         |   68.18 |    58.82 |      25 |   78.94 |
  getStatusBarHeight.js            |   68.18 |    58.82 |      25 |   78.94 | 17-18,22-23
|||||

## e2e test with detox ✈️

- iOS:`detox build -c ios` and`detox test -c ios`
- Android:`detox build -c android` and`detox test -c android`

| iOS | Android |
| - | - |
| [Imgur](https://i.imgur.com/ip78nXf.mp4) | [Imgur](https://i.imgur.com/p8fWjnw.mp4) |

## Storybook 📖

* `yarn run storybook` for start storybook
* `yarn run prestorybook` for collect all stories


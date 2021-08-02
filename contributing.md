# Contributing to this repository <!-- omit in toc -->

## Getting started <!-- omit in toc -->

Quick Start:
- Check out the [existing issues](https://github.com/sajrashid/React-Dynamic-Json-Table/issues) for your type of issue.
- This repository is a React JS component
- If this is your first commit please fork the repository, see below for details.
- Make your code changes
- Create a *Pull Request* ensure you target the *development* branch (development even with the main branch) 
- Sonar will scan your code for issues
- You can view the issues on Sonar cloud in the *Pull Request* link
- Your code will also be scanned by codacy & codefactor and are viewable in the PR
- [Sonar Cloud](https://sonarcloud.io/summary/new_code?id=sajrashid_React-Dynamic-Json-Table) Your issues will not be visible here until they are merged
- Have you read the [code of conduct](CODE_OF_CONDUCT.md)?

### Don't see your issue? Open one

If you spot something new, open an issue using a [template](https://github.com/sajrashid/React-Dynamic-Json-Table/issues/new/choose). We'll use the issue to have a conversation about the problem you want to fix.

**Note:** Your code needs to target at least 80% code coverage before we merge into the main branch, don't worry if your struggling to achieve 80%, just drop some comments in your PR and we'll help

### Ready to make a change? Fork the repo

Fork using GitHub Desktop:

- [Getting started with GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/getting-started-with-github-desktop) will guide you through setting up Desktop.
- Once Desktop is set up, you can use it to [fork the repo](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)!

Fork using the command line:

- [Fork the repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo#fork-an-example-repository) so that you can make your changes without affecting the original project until you're ready to merge them.

Fork with [GitHub Codespaces](https://github.com/features/codespaces):

- [Fork, edit, and preview](https://docs.github.com/en/free-pro-team@latest/github/developing-online-with-codespaces/creating-a-codespace) using [GitHub Codespaces](https://github.com/features/codespaces) without having to install and run the project locally.

### Make your update:
Make your changes to the file(s) you'd like to update. Here are some tips and tricks for [using the docs codebase](#working-in-the-githubdocs-repository).
  - Are you making changes to the application code? You'll need **Node.js v16** to run the site locally. See [contributing/development.md](contributing/development.md).
  - Are you contributing to markdown? We use [GitHub Markdown](contributing/content-markup-reference.md).

### Open a pull request
When you're done making changes and you'd like to propose them for review, use the [pull request template](#pull-request-template) to open your PR (pull request), please target the *development branch*

### Submit your PR & get it reviewed
- Once you submit your PR, others from the Docs community will review it with you. The first thing you're going to want to do is a [self review](#self-review).
- After that, we may have questions, check back on your PR to keep up with the conversation.
- Did you have an issue, like a merge conflict? Check out our [git tutorial](https://lab.github.com/githubtraining/managing-merge-conflicts) on how to resolve merge conflicts and other issues.

### Your PR is merged!
Congratulations! The whole GitHub community thanks you. :sparkles:

Once your PR is merged, you will be proudly listed as a contributor in the [contributor chart](https://github.com/sajrashid/React-Dynamic-Json-Table/graphs/contributors).

### Keep contributing as you use GitHub Docs

Now that you're a part of the GitHub Docs community, you can keep participating in many ways.

**Learn more about contributing:**

If you'd like help troubleshooting a docs PR you're working on, have a great new idea, or want to share something amazing you've learned in our docs, join us in [discussions](https://github.com/github/docs/discussions).

## Starting with an issue
You can browse existing issues to find something that needs help!

### Labels
Labels can help you find an issue you'd like to help with.
- The [`help wanted` label](https://github.com/github/docs/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) is for problems or updates that anyone in the community can start working on.
- The [`good first issue` label](https://github.com/github/docs/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) is for problems or updates we think are ideal for beginners.
- The [`content` label](https://github.com/github/docs/issues?q=is%3Aopen+is%3Aissue+label%3Acontent) is for problems or updates in the content on docs.github.com. These will usually require some knowledge of Markdown.
- The [`engineering` label](https://github.com/github/docs/issues?q=is%3Aopen+is%3Aissue+label%3Aengineering) is for problems or updates in the docs.github.com website. These will usually require some knowledge of JavaScript/Node.js or YAML to fix.

## Opening a pull request
You can use the GitHub user interface :pencil2: for some small changes, like fixing a typo or updating a readme. You can also fork the repo and then clone it locally, to view changes and run your tests on your machine.

## Working in the github/docs repository
Here's some information that might be helpful while working on a Docs PR:

- [Development](/contributing/development.md) - This short guide describes how to get this app running on your local machine.

- [Content markup reference](/contributing/content-markup-reference.md) - All of our content is written in GitHub-flavored Markdown, with some additional enhancements.

- [Content style guide for GitHub Docs](/contributing/content-style-guide.md) - This guide covers GitHub-specific information about how we style our content and images. It also links to the resources we use for general style guidelines.

- [Content model](/contributing/content-model.md) and [content templates](/contributing/content-templates.md) - The content model describes the purpose of each type of content we use in GitHub Docs and how to write for each type. The templates allow you to quickly get started with new articles.

- [Reusables](/data/reusables/README.md) - We use reusables to help us keep content up to date. Instead of writing the same long string of information in several articles, we create a reusable, then call it from the individual articles.

- [Variables](/data/variables/README.md) - We use variables the same way we use reusables. Variables are for short strings of reusable text.

- [Liquid](/contributing/liquid-helpers.md) - We use liquid helpers to create different versions of our content.

- [Scripts](/script/README.md) - The scripts directory is the home for all of the scripts you can run locally.

- [Tests](/tests/README.md) - We use tests to ensure content will render correctly on the site. Tests run automatically in your PR, and sometimes it's also helpful to run them locally.

## Reviewing
We (usually the docs team, but sometimes GitHub product managers, engineers, or supportocats too!) review every single PR. The purpose of reviews is to create the best content we can for people who use GitHub.

:yellow_heart: Reviews are always respectful, acknowledging that everyone did the best possible job with the knowledge they had at the time.  
:yellow_heart: Reviews discuss content, not the person who created it.  
:yellow_heart: Reviews are constructive and start conversation around feedback.  

### Self review
You should always review your own PR first.

For content changes, make sure that you:
- [ ] Confirm that the changes meet the user experience and goals outlined in the content design plan (if there is one).
- [ ] Compare your pull request's source changes to staging to confirm that the output matches the source and that everything is rendering as expected. This helps spot issues like typos, content that doesn't follow the style guide, or content that isn't rendering due to versioning problems. Remember that lists and tables can be tricky.
- [ ] Review the content for technical accuracy.
- [ ] Review the entire pull request using the [localization checklist](contributing/localization-checklist.md).
- [ ] Copy-edit the changes for grammar, spelling, and adherence to the [style guide](https://github.com/github/docs/blob/main/contributing/content-style-guide.md).
- [ ] Check new or updated Liquid statements to confirm that versioning is correct.
- [ ] If there are any failing checks in your PR, troubleshoot them until they're all passing.

### Pull request template
When you open a pull request, you must fill out the "Ready for review" template before we can review your PR. This template helps reviewers understand your changes and the purpose of your pull request.

### Suggested changes
We may ask for changes to be made before a PR can be merged, either using [suggested changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.

As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).



//code to make fork post request to github api

//
const { Octokit } = require("@octokit/rest");

//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 --- please DO NOT copy/paste anywhere

const accToken = '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';
const testRepo = 'https://api.github.com/repos/CodesmithLLC/algorithms-elective';
//instantiate api
const octokit = new Octokit({
    auth: accToken,
    userAgent: 'auto-Fork',

    timeZone: 'America/New_York',

    //baseurl not required?

    //debugging
    log: {
        debug: () => {},
        info: () => {},
        warn: console.warn,
        error: console.error
      },
    
      request: {
        agent: undefined,
        fetch: undefined,
        timeout: 0
      }
});

//POST request to fork public repo for authenticate user. Happens asynchronously
await octokit.request('POST /repos/{owner}/{repo}/forks', {
    owner: 'uitie',
    repo: testRepo,
    //organization optional
});
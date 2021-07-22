//code to make fork post request to github api

//
const { Octokit } = require("@octokit/rest");

//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 --- please DO NOT copy/paste anywhere

const accToken = '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';
const testRepo = 'https://api.github.com/repos/CodesmithLLC/algorithms-elective';
const tokenAuth = new Credentials('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');
client.Credentials = tokenAuth;
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





/*------------------------------------------------------------


//POST request to fork public repo for authenticate user. Happens asynchronously
await octokit.request('POST /repos/{owner}/{repo}/forks', {
    owner: 'uitie',
    repo: testRepo,
    //organization optional
});


//POST REQUEST TO CREATE NEW REPO WORKING: 
//code to make fork post request to github api

const { Octokit } = require("@octokit/core");
const { request } = require("@octokit/request");

//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 --- please DO NOT copy/paste anywhere

const octokit = new Octokit({ auth: 'g/hp_cLg7ZvLEBetZsiZhFc7fzu1xwDN1T90V6fyt' })

const result = await request("POST /user/repos", {
  headers: {
    authorization: "token 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",
  },
  name: 'octokiTest'
});
console.log(result.data);

console.log(`${result.data.length} repos found.`);

    
/*POST request to fork public repo for authenticate user. Happens asynchronously
const reponse = await octokit.request("POST /repos/uitie/data-structures-assessment/forks");
    response.then(data => console.log(data));
    
    auth: accToken,
    userAgent: 'autoFork',

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

------------------------------------------------------------ */
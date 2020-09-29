/* 
    Bonus Challenge 

    Fetch the list of 642 open APIs from
        https://api.publicapis.org/entries
        
    Create a my-api component
        display the name and category of the API,
        the description, and also display the type 
        of Auth (if any) and whether or not the API 
        supports HTTPS
    
    Use CSS Grid to style my-api
        The title and category should be 
        listed as Title (Category) 
        and should link to the API docs
        
    The grid should have 4 rows
        3rem, 1rem, 4rem, 3rem respectively
        and 3 columns each 1/3rd of available width
        
    Finally, display all of the APIs
*/

async function getAPIs() {
  const response = await fetch("https://api.publicapis.org/entries");
  const data = await response.json();
  return data;
}

function getAPIhtml(myAPI) {
  return `
  <div class="my-api">
  <div class="api-name">
    <a href="${myAPI.Link}" target='_blank'>
      ${myAPI.API} (${myAPI.Category})
    </a>
  </div>
  <div class="api-description">${myAPI.Description}</div>
  <div class="api-auth">Auth: ${myAPI.Auth ? myAPI.Auth : "No data"}</div>
  <div class="api-https">HTTPS: ${myAPI.HTTPS}</div>
</div>
  `;
}

function displayAPIs(myAPIs) {
  console.log(myAPIs.entries[0]);
  myAPIs = myAPIs.entries;
  document.body.innerHTML = `
    <h1>LIST OF API's OUT THERE</h1>
    <div class="my-apis">
      ${myAPIs.map(getAPIhtml).join("")}
    </div>
  `;
}

getAPIs()
  .then(displayAPIs)
  .catch((e) => console.log(`Error: ${e}`));

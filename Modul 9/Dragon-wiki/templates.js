
function generateCharacterHTML(i) {
    return /*html*/`
        <div onclick="openCard(${i})" class="card" id="card${i}">
            <img class="character-image" src="${characters[0]['items'][i]['image']}" alt="">
            <h1>${characters[0]['items'][i]['name']}</h1>
        </div>
    `;
}

function generateOpenedCharacterHTML(i) {
    return/*html*/ `
        <div class="openedCard" id="openedCard${i}">
            <div class="opened-headline">
                <img class="opened-image" src="${characters[0]['items'][i]['image']}" alt="">
                <h1>${characters[0]['items'][i]['name']}</h1>
                <div class="closer-div">
                    <img class="closer-button" onclick="closeCard()" src="./assets/img/circle-x.png" alt="">
                </div>
            </div>
            <div class="opened-navbar">
                <a onclick="showStats(${i})" class="opened-nav">Stats</a>
                <a onclick="showTransformations(${i})" class="opened-nav">Transformations</a>
            </div>
            <div class="line"></div>
            <div class="opened-card-content" id="opened-card-content">
            <table>
	            <tbody>
		            <tr>
			            <td><b>Affiliation:</b>&nbsp;</td>
			            <td>${characters[0]['items'][i]['affiliation']}&nbsp;</td>
		            </tr>
		            <tr>
			            <td><b>Gender:</b>&nbsp;</td>
			            <td>${characters[0]['items'][i]['gender']}&nbsp;</td>
		            </tr>
		            <tr>
			            <td><b>Ki:</b>&nbsp;</td>
			            <td>${characters[0]['items'][i]['ki']}&nbsp;</td>
		            </tr>
		            <tr>
			            <td><b>Max ki:</b>&nbsp;</td>
			            <td>${characters[0]['items'][i]['maxKi']}&nbsp;</td>
		            </tr>
		            <tr>
			            <td><b>&nbsp;Race:</b></td>
			            <td>${characters[0]['items'][i]['race']}&nbsp;</td>
		            </tr>
	            </tbody>
            </table>
            </div>
        </div>
     `;
}

function generateCharStatsHTML(i) {
    return/*html*/`
    <table>
	    <tbody>
		        <tr>
			        <td><b>Affiliation:</b>&nbsp;</td>
			        <td>${characters[0]['items'][i]['affiliation']}&nbsp;</td>
		        </tr>
		        <tr>
			        <td><b>Gender:</b>&nbsp;</td>
			        <td>${characters[0]['items'][i]['gender']}&nbsp;</td>
		        </tr>
		        <tr>
			        <td><b>Ki:</b>&nbsp;</td>
			        <td>${characters[0]['items'][i]['ki']}&nbsp;</td>
		        </tr>
		        <tr>
			        <td><b>Max ki:</b>&nbsp;</td>
			        <td>${characters[0]['items'][i]['maxKi']}&nbsp;</td>
		        </tr>
		        <tr>
			        <td>&nbsp;<b>Race:</b></td>
			        <td>${characters[0]['items'][i]['race']}&nbsp;</td>
		        </tr>
	    </tbody>
    </table>
    `;
}

function generateTransformationsHTML(i) {
    return/*html*/ `
        <div>
            <img class="trans-image" src="${transformations[0][i]['image']}" alt="">
        </div>
    `;
}
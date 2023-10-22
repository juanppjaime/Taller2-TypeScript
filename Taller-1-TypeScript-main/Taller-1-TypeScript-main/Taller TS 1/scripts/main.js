import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var promedio = 0;
renderSeriesInTable(data);
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement('tr');
        trElement.innerHTML = "<th>".concat(serie.id, "</th>\n                                <td class=\"text-primary\">").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td>\n                                <td>").concat(serie.season, "</td>");
        seriesTbody.appendChild(trElement);
        promedio += serie.season;
    });
    promedio /= series.length;
    document.getElementById("average").innerHTML = "Seasons Average: ".concat(promedio);
}

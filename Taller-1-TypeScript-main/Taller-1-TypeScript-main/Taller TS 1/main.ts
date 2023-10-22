import {Serie} from './series.js';
import {data} from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
let promedio: number = 0;

renderSeriesInTable(data);

function renderSeriesInTable(series: Serie[]): void{
    series.forEach((serie) => {
        let trElement = document.createElement('tr');
        trElement.innerHTML =  `<th>${serie.id}</th>
                                <td class="text-primary">${serie.name }</td>
                                <td>${serie.channel}</td>
                                <td>${serie.season}</td>`;

        seriesTbody.appendChild(trElement);
        promedio += serie.season;
    });
    promedio /= series.length;
    document.getElementById("average")!.innerHTML = `Seasons Average: ${promedio}`;

}
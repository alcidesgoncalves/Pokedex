
function index(){
    let ans = document.getElementById('ans');
    return ans.value;
}

async function getPokemonTypes() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index()}`);
    const data = await response.json();
    const types = data.types;
    
    console.log(data);
    document.getElementById('name').innerHTML = data['name'];
    let img = data['sprites']['front_default'];
    //if(types.length === 1){
        switch (types[0]['type']['name']) {
            case 'normal':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-fire','type-water','type-electric','type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-fire','type-water','type-electric','type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-normal');
                break;
            case 'fire':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-water','type-electric','type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-water','type-electric','type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-fire');
                break;
            case 'water':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-electric','type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-electric','type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-water');
                break;
            case 'electric':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-electric');
                break;
            case 'grass':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-ice','type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-ice','type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-grass');
                break;
            case 'ice':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-ice');
                break;
            case 'fighting':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-fighting');
                break;
            case 'poison':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-poison');
                break;
            case 'ground':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-ground');
                break;
            case 'flying':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-flying');
                break;
            case 'psychic':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-psychic');
                break;
            case 'bug':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-rock','type-ghost','type-dragon','type-steel','type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-rock','type-ghost','type-dragon','type-steel','type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-bug');
                break;
            case 'rock':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-ghost','type-dragon','type-steel','type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-ghost','type-dragon','type-steel','type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-rock');
                break;
            case 'ghost':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-dragon','type-steel','type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-dragon','type-steel','type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-ghost');
                break;
            case 'dragon':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-steel','type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-steel','type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-dragon');
                break;
            case 'steel':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-dark','type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-dark','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-steel');
                break;
            case 'dark':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo').classList.remove('type-fairy');
                    document.getElementById('tipo2').classList.remove('type-icon','type-fairy');
                    document.getElementById('tipo').classList.add('type-icon','type-dark');
                break;
            case 'fairy':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'];
                    document.getElementById('tipo2').innerHTML = '';
                    document.getElementById('tipo2').classList.remove('type-icon');
                    document.getElementById('tipo').classList.add('type-icon','type-fairy');
                break;
            default:
                return 'algo deu errado';
    }
        switch (types[1]['type']['name']) {
            case 'normal':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-fire','type-water','type-electric','type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-normal');
                break;

            case 'fire':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-water','type-electric','type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-fire');
                break;

            case 'water':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-icon','type-electric','type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-water');
                break;

            case 'electric':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-grass','type-ice',
                    'type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-electric');
                break;
                
            case 'grass':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-ice','type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-grass');
                break;

            case 'ice':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-fighting','type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-ice');
                break;

            case 'fighting':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-poison','type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-fighting');
                break;

            case 'poison':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-ground','type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-poison');
                break;

            case 'ground':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-flying','type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-ground');
                break;

            case 'flying':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-flying');
                break;

            case 'psychic':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-bug','type-rock','type-ghost','type-dragon','type-steel'
                    ,'type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-psychic');
                break;

            case 'bug':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-rock','type-ghost','type-dragon','type-steel','type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-bug');
                break;

            case 'rock':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-ghost','type-dragon','type-steel','type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-rock');
                break;

            case 'ghost':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-dragon','type-steel','type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-ghost');
                break;

            case 'dragon':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-steel','type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-dragon');
                break;

            case 'steel':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-dark','type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-steel');
                break;

            case 'dark':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.remove('type-fairy');
                    document.getElementById('tipo2').classList.add('type-icon','type-dark');
                break;
                
            case 'fairy':
                    document.getElementById('pic').setAttribute('src', img);
                    document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
                    document.getElementById('tipo2').classList.add('type-icon','type-fairy');
                break;
            
    }
    
    //amostrando os tipos 
    console.log(types[0]['type']['name']);
    console.log(types[1]['type']['name']);
}

document.getElementById('button').onclick = getPokemonTypes;


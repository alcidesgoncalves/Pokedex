
function index(){
    let answer = document.getElementById('ans');
    return answer.value;
}

async function getPokemonTypes() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index().toLowerCase()}`);
    const data = await response.json();
    const types = data.types;
    const setType = () => {
        document.getElementById('pic').setAttribute('src', img),
        document.getElementById('tipo').innerHTML = data['types']['0']['type']['name'],
        document.getElementById('tipo2').innerHTML = '';
    }
    const setDualType = () => {
        document.getElementById('pic').setAttribute('src', img);
        document.getElementById('tipo2').innerHTML = data['types']['1']['type']['name'];
    }
    const remove = () => {
        document.getElementById('tipo').classList.remove('type-fire','type-water','type-electric','type-grass','type-ice','type-fighting','type-poison','type-ground','type-flying',
        'type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel','type-dark','type-fairy');
        document.getElementById('tipo2').classList.remove('type-icon','type-fire','type-water','type-electric','type-grass','type-ice','type-fighting','type-poison','type-ground','type-flying',
        'type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel','type-dark','type-fairy');
    }
    const removeDualType = () => {
        document.getElementById('tipo2').classList.remove('type-icon','type-fire','type-water','type-electric','type-grass','type-ice','type-fighting','type-poison','type-ground','type-flying',
        'type-psychic','type-bug','type-rock','type-ghost','type-dragon','type-steel','type-dark','type-fairy');
    }
    
    console.log(data);

    document.getElementById('name').innerHTML = data['name'];
    let img = data['sprites']['front_default'];
        switch (types[0]['type']['name']) {
            case 'normal':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-normal');
                break;
            case 'fire':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-fire');
                break;
            case 'water':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-water');
                break;
            case 'electric':
                    setType();
                    remove(); 
                    document.getElementById('tipo').classList.add('type-icon','type-electric');
                break;
            case 'grass':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-grass');
                break;
            case 'ice':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-ice');
                break;
            case 'fighting':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-fighting');
                break;
            case 'poison':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-poison');
                break;
            case 'ground':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-ground');
                break;
            case 'flying':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-flying');
                break;
            case 'psychic':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-psychic');
                break;
            case 'bug':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-bug');
                break;
            case 'rock':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-rock');
                break;
            case 'ghost':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-ghost');
                break;
            case 'dragon':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-dragon');
                break;
            case 'steel':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-steel');
                break;
            case 'dark':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-dark');
                break;
            case 'fairy':
                    setType();
                    remove();
                    document.getElementById('tipo').classList.add('type-icon','type-fairy');
                break;
            default:
                return 'algo deu errado';
    }
        switch (types[1]['type']['name']) {
            case 'normal':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-normal');
                break;

            case 'fire':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-fire');
                break;

            case 'water':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-water');
                break;

            case 'electric':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-electric');
                break;
                
            case 'grass':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-grass');
                break;

            case 'ice':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-ice');
                break;

            case 'fighting':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-fighting');
                break;

            case 'poison':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-poison');
                break;

            case 'ground':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-ground');
                break;

            case 'flying':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-flying');
                break;

            case 'psychic':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-psychic');
                break;

            case 'bug':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-bug');
                break;

            case 'rock':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-rock');
                break;

            case 'ghost':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-ghost');
                break;

            case 'dragon':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-dragon');
                break;

            case 'steel':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-steel');
                break;

            case 'dark':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-dark');
                break;
                
            case 'fairy':
                    setDualType();
                    removeDualType();
                    document.getElementById('tipo2').classList.add('type-icon','type-fairy');
                break;    
    }
    
    //amostrando os tipos 
    console.log(types[0]['type']['name']);
    console.log(types[1]['type']['name']);
}

document.getElementById('button').onclick = getPokemonTypes;


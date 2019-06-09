Реализация поиска по записям на React/Redux/Redux-Saga

Api: https://swapi.co/

Технологии:
- React
- React Route
- Redux
- Redux-Saga

Компоненты:
- index.js - компонент App: в нем реализован роутинг по компонентам проетка
- StarWarsHome: выводит все компоненты проекта
- StarWarsPreview: выводит ссылки с именами героев 
- StarWarsSearch:  выводит поле поиска, а также фильтрует данные
- StarWarsHeroesPage: выводит данные по выбраному герою

Данные получаю с помощью двух  redux-saga:
- getHeroesWalker - получает данные с помощью axios и результат записывается в state heroes
- getHeroesSelectWalker - фильтрует данные путем подставления в url (action actionFilterHeroes подставляет данные из поля поиска)
- Отфильтрованный массив попадает в state filter_heroes
- Логика фильтра массива написана в reducer при описании action: 
  
  case 'FILTER_HEROES_LIST':
      
      let arrHeroes = state.heroes.results;
      
      let arrFilterHeroes = arrHeroes.filter(heroes => heroes.name.toLowerCase().includes(action.payload.toLowerCase())) 
      
      return {
        ...state,
        filter_heroes: [...arrFilterHeroes]
      }; 
      
- Также есть закомментированное решение фильтрации:      

var listHeroes = this.props.heroes.results.filter(test => 

test.name.toLowerCase().includes(this.props.search_value)).map((item, index) => {
			
      return <StarWarsPrew key={index} name={item.name} id={index} />;
});

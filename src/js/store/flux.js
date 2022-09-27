const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      infoCharacters: [],
      infoPlanets: [],
      favoritos: [],
    },
    actions: {
      //   Use getActions to call a function within a fuction
      addFav: (item) => {
        let aux = getStore().favoritos;
        aux.push(item);
        setStore({ favoritos: aux });
      },
      removeFav: (index) => {
        let aux = getStore().favoritos;
        let x = aux.filter((element, i) => i != index);
        setStore({ favoritos: x });
      },

      verInfoPersonajes: (id) => {
        fetch("https://www.swapi.tech/api/people/" + id)
          .then((resp) => resp.json())
          .then((datos) =>
            setStore({ infoCharacters: datos.result.properties })
          )
          .catch((error) => console.log(error));
      },
      verInfoPlanets: (id) => {
        fetch("https://www.swapi.tech/api/planets/" + id)
          .then((resp) => resp.json())
          .then((datos) => setStore({ infoPlanets: datos.result.properties }))
          .catch((error) => console.log(error));
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        fetch("https://www.swapi.tech/api/people")
          .then((resp) => resp.json())
          .then((datos) => setStore({ characters: datos.results }))
          .catch((error) => console.log(error));

        fetch("https://www.swapi.tech/api/planets")
          .then((resp) => resp.json())
          .then((datos) => setStore({ planets: datos.results }))
          .catch((error) => console.log(error));

        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;

import { useState, useEffect } from 'react';
import stylesApp from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const url = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    success: false,
    data: []
  })

  useEffect(() => {
    const getData = async () => {
      setState((prevState) => ({
        ...prevState,
        hasError: false,
        success: false,
        isLoading: true
      }));

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const result = await response.json();
        setState((prevState) => ({
          ...prevState,
          data: result.data,
          success: true,
          isLoading: false
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          hasError: true,
          isLoading: false
        }));
        console.error(error);
      }
    };

    getData();
  }, []);

  const { data, isLoading, hasError } = state;

  return (
    <>
      <AppHeader />
      <main>
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка'}
        {!isLoading && !hasError && data.length &&
          <section className={`${stylesApp.section} mt-10`}>
            <BurgerIngredients />
            <BurgerConstructor products={state.data} />
          </section>
        }
      </main>
    </>
  );
}

export default App;

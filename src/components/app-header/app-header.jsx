import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesHeader from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={`${stylesHeader.header} pt-4 pb-4 mt-10`}>
      <nav>
        <ul className={stylesHeader.list}>
          <li className={stylesHeader.item}>
            <a className={`${stylesHeader.link} mr-2 pl-5 pt-4 pr-5 pb-4`} href="/">
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default">Конструктор</p>
            </a>
            <a className={`${stylesHeader.link} pl-5 pt-4 pr-5 pb-4`} href="/">
              <ListIcon type="primary" />
              <p className="text text_type_main-default">Лента заказов</p>
            </a>
          </li>
          <li className={stylesHeader.logo}>
            <a href="/">
              <Logo />
            </a>
          </li>
          <li>
            <a className={`${stylesHeader.link} pl-5 pt-4 pr-5 pb-4`} href="/">
              <ProfileIcon type="primary" />
              <p className="text text_type_main-default">Личный кабинет</p>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';
import MyButton from './components/MyButton';
import Navigation from './components/Navigation';
import { Container as MUIContainer } from '@mui/material'; // Переименовываем импорт

function App() {
  const [selectedLab, setSelectedLab] = useState(null);

  const labs = [
    {
      title: 'Лабораторная работа 1',
      content: (
        <div>
          <p>Реализовать скрипт, который уведомит о полной загрузке страницы.</p>
          <ul>
            <li>Реализовать кнопку счетчик, которая будет увеличивать счетчик на "1" и выводить его значение на страницу (button onclick).</li>
            <li>Реализовать кнопку счетчик, которая будет уменьшать счетчик на "1" реализовать с помощью listener click.</li>
            <li>Реализовать форму аутентификации пользователя (использовать &lt;form&gt;).</li>
            <li>Реализовать скрипт очистки данных формы.</li>
            <li>Реализовать скрипт отправки данных формы с помощью listener submit. Без отправки на сервер провести валидацию введенных данных, если login=="admin" & pass=="admin" вывести сообщение об успехе, иначе сообщение о неуспехе.</li>
            <li>Реализовать скрипт сохранения учетных данных и автоподстановку оных с помощью localStorage.</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Лабораторная работа 2',
      content: (
        <div>
          <p>Создать "Hello World" приложение на основе React. Для создания можно использовать create-react-app или vite.</p>
          <ul>
            <li>Реализовать компонент кнопку, контейнер и использовать их на странице.</li>
            <li>Реализовать шаблон страницы и разместить на нем компоненты навигации.</li>
            <li>Разместить проект в репозиторий в github.</li>
            <li>Прикрепить текстовый файл с ссылкой на проект.</li>
          </ul>
        </div>
      )
    },
    {
      title: 'Лабораторная работа 3',
      content: (
        <div>
          <p>Продолжаем задание "Реализовать шаблон страницы и разместить на нем компоненты навигации" (Можно использовать готовые библиотеки Mui/Bootstrap и т.д.).</p>
          <ul>
            <li>Реализуем компоненты Header, Footer, Menu и Content.</li>
            <li>В меню выводим список лабораторных работ.</li>
            <li>В Content выводим содержимое лабораторной работы.</li>
        
          </ul>
          <p>Разместить проект в репозиторий в github.</p>
          <p>Прикрепить текстовый файл с ссылкой на проект.</p>
        </div>
      )
    },
  
  ];
  

  const handleLabSelect = (index) => {
    setSelectedLab(labs[index]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Navigation />
      <MUIContainer component="main" sx={{ flex: 1, display: 'flex' }}>
        <Menu labs={labs} onLabSelect={handleLabSelect} />
        <Content 
          title={selectedLab ? selectedLab.title : 'Выберите лабораторную работу'} 
          content={selectedLab ? selectedLab.content : 'Пожалуйста, выберите лабораторную работу из меню.'} 
        />
      </MUIContainer>
      <MUIContainer>
        <MyButton text="Button 1" />
        <MyButton text="Button 2" />
        <MyButton text="Button 3" />
      </MUIContainer>
      <Footer />
    </div>
  );
}

export default App;
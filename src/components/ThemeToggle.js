import React, { useContext } from 'react';
import { ThemeContext } from '../Context';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material'; // Импортируем иконки для светлой и темной темы

const ThemeToggle = () => {
    const { toggleTheme, isDarkTheme } = useContext(ThemeContext); // Используем isDarkTheme из контекста

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '8px' }}>
            <IconButton 
                onClick={toggleTheme}
                sx={{
                    padding: { xs: '4px', sm: '8px' }, // Адаптивные отступы
                    borderRadius: '4px',
                }}
            >
                {isDarkTheme ? <Brightness7 /> : <Brightness4 />} {/* Меняем иконку в зависимости от темы */}
            </IconButton>
        </div>
    );
};

export default ThemeToggle;
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export const newUser = () => {
    const [usuario, setUsuario] = useState<any>({});
    const [error, setError] = useState<any>({});

    useEffect(() => {
        AsyncStorage.getItem('user').then((usuario) => {
            if (usuario) {
                setUsuario(JSON.parse(usuario));
            }
        });
    }, []);

    const validar = () => {
        let erros = {};

        if (!usuario.name) {
            erros = { ...erros, name: 'Campo nome é obrigatório' };
        } else if (usuario.name.length < 3) {
            erros = { ...erros, name: 'Campo nome deve ter mais de 3 caracteres' };
        }

        if (!usuario.email) {
            erros = { ...erros, email: 'Campo email é obrigatório' };
        } else if (!usuario.email.includes('@')) {
            erros = { ...error.email, email: 'Campo email deve conter um @' }
        }
        if (!usuario.password) {
            erros = { ...erros, password: 'Campo senha é obrigatório' };
        } else if (usuario.password.length < 6) {
            erros = { ...erros, password: 'Campo senha deve ter mais de 6 caracteres' };
        }

        setError(erros);
        return Object.keys(erros).length === 0;
    }



    const salvar = () => {
        if (validar()) {
            AsyncStorage.setItem('user', JSON.stringify(usuario));
        }

    };

    return {
        usuario,
        setUsuario,
        error,
        setError,
        salvar,
    };
};
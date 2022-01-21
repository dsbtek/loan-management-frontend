import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from '../components/layout/layout';
import { store } from '../app/store';
import '../styles/globals.scss';
import { ThemeProvider, createTheme,  } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#20BDB5',
            contrastText: '#fff',
        },
        background: {
            paper: 'black',
        },  
    },
    
});

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }: AppProps ) {
    return (
        <ThemeProvider theme = {theme}>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Layout> 
                        {/* eslint-disable react/jsx-props-no-spreading */}
                        <Component {...pageProps} />
                    </Layout> 
                </Provider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}


export default MyApp;

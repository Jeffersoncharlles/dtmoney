import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { Table } from '../../components/Table';
import { api } from '../../lib/api';
import {
    HomeContainer,
} from './styles';



export const Home = () => {


    return (
        <HomeContainer>
            <Header />
            <Summary />
            <Table />

        </HomeContainer>
    );
}
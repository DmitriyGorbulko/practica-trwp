import React, { useEffect, useState } from 'react';
import { ICategory, fetchData } from '../services';
import { Helmet } from 'react-helmet';


export const ServicesList = () => {
        
    return (
        <div>
            <Helmet>
                <title>Услуги - Здоровая лапка</title>
                <meta name="description" content="Список услуг клиники Здоровая лапка." />
                <meta name="keywords" content="ветеринария, услуги, домашние животные, рентген, УЗИ" />
                <meta property="og:title" content="Услуги - Здоровая лапка" />
                <meta property="og:description" content="Список услуг клиники Здоровая лапка." />
                <meta property="og:url" content="https://example.com/services" />
                <meta property="og:type" content="website" />
            </Helmet>
            <h2>Услуги клиники</h2>
            <table>
                <thead>
                    <tr>
                        <th>Наименование</th>
                        <th>Единица измерения</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            Рентгенографическое исследование
                        </th>
                    </tr>
                    <tr>
                        <td>Рентгенографическое исследование в 1 проекции</td>
                        <td>1 снимок</td>
                        <td>1700</td>
                    </tr>
                    <tr>
                        <td>Рентгенографическое исследование в 2 проекциях</td>
                        <td>2 снимка</td>
                        <td>2950</td>
                    </tr>
                    <tr>
                        <td>Рентгенографическое исследование в 3 проекциях</td>
                        <td>3 снимка</td>
                        <td>4200</td>
                    </tr>
                    <tr>
                        <td>Рентгенографическое исследование в 4 проекциях</td>
                        <td>4 снимка</td>
                        <td>5500</td>
                    </tr>
                    <tr>
                        <td>Рентгенографическое исследование в ночное время для исключения патологий, требующих экстренного лечения</td>
                        <td>1 снимок</td>
                        <td>1300</td>
                    </tr>
                    <tr>
                        <td>Рентген брюшной полости</td>
                        <td>2 снимка</td>
                        <td>2950</td>
                    </tr>
                    <tr>
                        <td>Рентген грудной клетки</td>
                        <td>3 снимка</td>
                        <td>4200</td>
                    </tr>
                    <tr>
                        <td>Рентген черепа</td>
                        <td>3 снимка</td>
                        <td>3800</td>
                    </tr>
                    <tr>
                        <td>Рентгенографическое исследование мелких птиц/грызунов (1 проекция)</td>
                        <td>1 снимок</td>
                        <td>1600</td>
                    </tr>
                    <tr>
                        <td>Рентгенографическое исследование крупных птиц (1 проекция)</td>
                        <td>1 снимок</td>
                        <td>1600</td>
                    </tr>
                    <tr>
                        <td>Рентгенографическое исследование мелких птиц ( 2 проекции)</td>
                        <td>2 снимка</td>
                        <td>2650</td>
                    </tr>
                    <tr>
                        <td>Рентгенографическое исследование крупных птиц (2 проекции)</td>
                        <td>2 снимка</td>
                        <td>3150</td>
                    </tr>
                    <tr>
                        <td>Рентгеноконтрастная цистография с учетом уретрального катетера и катетеризации, без стоимости лекарственных препаратов</td>
                        <td>1 исслед.</td>
                        <td>6700</td>
                    </tr>
                    <tr>
                        <td>Рентгеноконтрастное исследование желудочно-кишечного тракта с сульфатом бария, без учета контрастного вещества</td>
                        <td>серия</td>
                        <td>8400</td>
                    </tr>
                    <tr>
                        <td>Введение контрастного вещества с целью проведения миелографии,  включая стоимость контрастного вещества, без стоимости общей анестезии</td>
                        <td>1 процед.</td>
                        <td>5250</td>
                    </tr>
                    <tr>
                        <td>Снимок на дентальном визиографе</td>
                        <td>1 снимок</td>
                        <td>650</td>
                    </tr>
                    <tr>
                        <td>Фистулография, без стоимости контрастного вещества</td>
                        <td>1 исслед.</td>
                        <td>3150</td>
                    </tr>
                    <tr>
                        <td>Экскреторная урография, без стоимости контрастного вещества</td>
                        <td>1 исслед.</td>
                        <td>6450</td>
                    </tr>
                    <tr>
                        <th>
                            Ультразвуковое исследование		
                        </th>
                    </tr>
                    <tr>
                        <td>Проведение манипуляций под контролем УЗИ</td>
                        <td>1 голова</td>
                        <td>650</td>
                    </tr>
                    <tr>
                        <td>Пункционная биопсия под контролем УЗИ, с учетом расходных материалов</td>
                        <td>1 процед.</td>
                        <td>5750</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование брюшной полости детализированное</td>
                        <td>1 исслед.</td>
                        <td>4500</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование брюшной полости обзорное для онкологических пациентов в динамике</td>
                        <td>1 исслед.</td>
                        <td>3050</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование брюшной полости у птиц</td>
                        <td>1 исслед.</td>
                        <td>1600</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование желудочно-кишечного тракта, печени, поджелудочной железы и селезенки</td>
                        <td>1 исслед.</td>
                        <td>2100</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование желудочно-кишечного тракта</td>
                        <td>1 исслед.</td>
                        <td>1300</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование глаза и подлежащих структур</td>
                        <td>1 исслед.</td>
                        <td>2100</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование головного мозга</td>
                        <td>1 исслед.</td>
                        <td>2100</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование грудной полости</td>
                        <td>1 исслед.</td>
                        <td>1900</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование одного патологического очага</td>
                        <td>1 исслед.</td>
                        <td>650</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование двух патологических очагов</td>
                        <td>1 исслед.</td>
                        <td>1300</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование мочевыделительной системы</td>
                        <td>1 исслед.</td>
                        <td>1900</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование на выявление сосудистых аномалий</td>
                        <td>1 исслед.</td>
                        <td>3200</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование на наличие свободной жидкости в брюшной/грудной полости</td>
                        <td>1 исслед.</td>
                        <td>650</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование надпочечников</td>
                        <td>1 исслед.</td>
                        <td>1500</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование области шеи (щитовидной и слюнных желез, лимфатических узлов)</td>
                        <td>1 исслед.</td>
                        <td>2100</td>
                    </tr>
                    <tr>
                        <td>Ультразвуковое исследование репродуктивной системы</td>
                        <td>1 исслед.</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>Холтеровское мониторирование (расшифровка холтера)</td>
                        <td>1 исслед.</td>
                        <td>6750</td>
                    </tr>
                    <tr>
                        <td>Холтеровское мониторирование (установка хол</td>
                        <td>1 исслед.</td>
                        <td>750</td>
                    </tr>
                    <tr>
                        <td>Холтеровское мониторирование (установка и расшифровка холтера)</td>
                        <td>1 исслед.</td>
                        <td>7500</td>
                    </tr>
                    <tr>
                        <td>Скрининг ЭХОКГ (только для кошек)</td>
                        <td>1 исслед.</td>
                        <td>2600</td>
                    </tr>
                    <tr>
                        <td>Фокусное ЭХОКГ</td>
                        <td>1 исслед.</td>
                        <td>1300</td>
                    </tr>
                    <tr>
                        <td>Электрокардиограмма</td>
                        <td>1 исслед.</td>
                        <td>1550</td>
                    </tr>
                    <tr>
                        <td>Предоперационная электрокардиограмма собакам (выполняется кардиологом)</td>
                        <td>1 исслед.</td>
                        <td>1800</td>
                    </tr>
                    <tr>
                        <td>ЭХО-кардиограмма</td>
                        <td>1 исслед.</td>
                        <td>3850</td>
                    </tr>
                    <tr>
                        <td>Комплексное кардиологические исследование сердца перед анестезией</td>
                        <td>1 комплекс ислед.</td>
                        <td>5000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
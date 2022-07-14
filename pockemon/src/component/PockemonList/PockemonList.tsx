/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { getPockemonInfo, getPockemons } from '../../api/api';
import { setPockemonAction } from '../../store/action';
import { getPockemonSeclectors } from '../../store/selector';
import './PockemonList.scss';
import { PockemonInfo } from '../PockemonInfo';

const API = 'https://pokeapi.co/api/v2/pokemon/';

export const PockemonList: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [optionValue, setOptionValue] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [types, setTypes] = useState<string[]>([]);
  const [pockemonSelect, setPockemonSelect] = useState<Pockemon | null>(null);
  const pockemons = useSelector(getPockemonSeclectors(query, optionValue));

  useEffect(() => {
    const loadPockemonsFromServer = async () => {
      try {
        const pockemonsFromServer = await getPockemons(API);

        setNextPage(pockemonsFromServer.next);
        setPrevPage(pockemonsFromServer.previous);

        await loadPockemonInfoFromServer(pockemonsFromServer.results);
      } catch (error) {
        alert('Eror try later');
      }
    };

    loadPockemonsFromServer();
  }, []);

  const loadPockemonInfoFromServer = async (pockemonsArr:Pockemon[]) => {
    const pockemonData = await Promise.all(pockemonsArr.map(async item => {
      const response = await getPockemonInfo(item.url);
      const newPockemon:Pockemon = {
        name: item.name,
        url: item.url,
        info: {
          sprites: response.sprites.front_default,
          moves: response.moves,
          stats: response.stats,
          types: response.types,
        },
      };

      return newPockemon;
    }));

    dispatch(setPockemonAction(pockemonData));
    await getPockemonType(pockemonData);
  };

  const getPockemonType = async (data:Pockemon[]) => {
    const arr:string[] = [];

    data.forEach(value => {
      value.info.types.forEach(item => {
        if (!arr.includes(item.type.name)) {
          arr.push(item.type.name);
        }
      });
    });

    setTypes(arr);
  };

  const showNextPage = async () => {
    if (!nextPage) {
      return;
    }

    const dataPockemon = await getPockemons(nextPage);

    await loadPockemonInfoFromServer(dataPockemon.results);
    setNextPage(dataPockemon.next);
    setPrevPage(dataPockemon.previous);
    setOptionValue('');
  };

  const showPrewPage = async () => {
    if (!prevPage) {
      return;
    }

    const dataPockemon = await getPockemons(prevPage);

    await loadPockemonInfoFromServer(dataPockemon.results);
    setNextPage(dataPockemon.next);
    setPrevPage(dataPockemon.previous);
    setOptionValue('');
  };

  const PockemonAbout = (pockemon:Pockemon) => {
    if (pockemon.name === pockemonSelect?.name) {
      setPockemonSelect(null);
    } else {
      setPockemonSelect(pockemon);
    }
  };

  return (
    <div className="pockemon-container">
      <div className="pockemon-list">
        <div>
          <button
            type="button"
            className="button is-link"
            onClick={showPrewPage}
            disabled={prevPage === ''}
          >
            Previous Page
          </button>
          <button
            type="button"
            className="button is-primary"
            onClick={showNextPage}
            disabled={nextPage === ''}
          >
            Next Page
          </button>
        </div>
        <div className="option-container">
          <input
            type="text"
            name="query"
            className="input"
            placeholder="Type search word"
            value={query}
            onChange={(event) => (
              setQuery(event.target.value)
            )}
          />
          <select
            className="input"
            value={optionValue}
            onChange={(event) => (
              setOptionValue(event.target.value)
            )}
          >
            <option value="">Chose type to sort Pockemons</option>
            {types.map(item => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
        <ul className="pockemon-list__list">
          {pockemons.map(pockemon => (
            <li
              className="pockemon-list__item"
              key={pockemon.name}
            >
              <div className="pockemon-list__title">
                Pockemon name:
                <b className="pockemon-list__name">{` ${pockemon.name}`}</b>
              </div>

              <div>
                <button
                  type="button"
                  className={classnames('button is-primary', { 'is-danger': pockemonSelect?.name === pockemon.name })}
                  onClick={() => {
                    PockemonAbout(pockemon);
                  }}
                >
                  { pockemonSelect?.name === pockemon.name ? 'Close' : 'More Details'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      { pockemonSelect && (
        <PockemonInfo pockemon={pockemonSelect} />
      ) }
    </div>
  );
};

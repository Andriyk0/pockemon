/* eslint-disable no-console */
import React from 'react';
import './PockemonInfo.scss';

type Props = {
  pockemon: Pockemon
};

export const PockemonInfo: React.FC<Props> = ({ pockemon }) => {
  return (
    <div className="pockemon-info">
      <h3 className="pockemon-info__title">Pockemon details:</h3>
      <section className="pockemon-info__post">
        <h2>{pockemon.name}</h2>
      </section>
      <section>
        <img src={pockemon.info.sprites} alt="pockemon" />
      </section>
      <section className="pockemon-info__type">
        <h3 className="pockemon-info__type-title">Type:</h3>
        {
          pockemon.info.types.map(item => (
            <p
              className="pockemon-info__type-name button is-warning"
              key={item.type.name}
            >
              { item.type.name }
            </p>
          ))
        }
      </section>
      <section className="pockemon-info__comments">
        <p className="pockemon-info__stat">Stats:</p>
        <ol>
          {pockemon.info.stats.map(item => (
            <li
              key={item.stat.name}
              className="pockemon-info__stats"
            >
              {`${item.stat.name} - ${item.base_stat}`}
            </li>
          ))}
        </ol>
      </section>

      <section className="pockemon-info__moves">
        <p className="pockemon-info__moves-title">Moves:</p>
        <ol>
          {
            pockemon.info.moves.map(item => (
              <li key={item.move.name}>
                {item.move.name}
              </li>
            ))
          }
        </ol>
      </section>
    </div>
  );
};

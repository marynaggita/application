import React from 'react';
import { Link } from 'react-router-dom';

function courseItem(props) {
    return (
        <>
          <li className='course__item'>
              
            <Link className='course__item__link' to={props.path}>
              <figure className='course__item__pic-wrap' data-category={props.label}>
                <img
                  className='course__item__img'
                  alt='Course Image'
                  src={props.src}
                />
              </figure>
              <div className='course__item__info'>
                <h5 className='course__item__text'>{props.text}</h5>
              </div>
            </Link>
          </li>
        </>
      );
    }

export default courseItem;

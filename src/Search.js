import React from 'react';
import algoliasearch from 'algoliasearch';
import {
  InstantSearch,
  SearchBox,
  Pagination,
  SortBy,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import { MovieList } from './components/MovieList';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

const searchClient = algoliasearch(
  'TMPMXAV4QZ',
  '25ba538bbe08765a87e452e7e748141c'
);
const refinementProps = { showMore: true, showMoreLimit: 30 };
const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName='movies'>
      <Container>
        <header className='header'>
          <SearchBox
            className='d-flex justify-content-center search-bar'
            translations={{ placeholder: 'Search IMDB Top List' }}
          />
        </header>
        <ToastContainer
          closeOnClick
          position='top-left'
          closeButton={false}
          limit={1}
        />
        <Row className='sort'>
          <Col className='d-flex flex-row-reverse'>
            <SortBy
              defaultRefinement='movies'
              items={[
                { value: 'movies', label: 'Featured' },
                { value: 'movie_sort', label: 'Rating Desc' },
                { value: 'movie_year_desc', label: 'Year Desc' },
                { value: 'movie_score_high', label: 'Score Asc' },
              ]}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Col className='left-side mx-auto'>
          <ClearRefinements />
          <h2>Genre</h2>
          <RefinementList
            attribute='genre'
            className='list-group'
            {...refinementProps}
          />
          <h2>Year</h2>
          <RefinementList
            attribute='year'
            className='list-group'
            {...refinementProps}
          />
          <h2>Rating</h2>
          <RefinementList attribute='rating' className='list-group rating' />
          <Configure hitsPerPage={24} />
        </Col>
      </Container>
      <Container>
        <Row md={3}>
          <MovieList />
        </Row>
        <Pagination />
      </Container>
    </InstantSearch>
  );
};

export default Search;

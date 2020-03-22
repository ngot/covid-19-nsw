import React from 'react';
import { Grid, Statistic, Table, List } from 'semantic-ui-react';
import { TOGGLES, getToggle } from '../../toggles.js';
import './index.scss';

const SOURCE_BY_STATE = {
  NSW: 'https://www.health.nsw.gov.au/news/pages/2020-nsw-health.aspx',
  VIC: 'https://www.dhhs.vic.gov.au/media-hub-coronavirus-disease-covid-19',
  QLD: 'https://www.health.qld.gov.au/news-events/doh-media-releases',
  WA:
    'https://ww2.health.wa.gov.au/~/media/Files/Corporate/general%20documents/Infectious%20diseases/PDF/Coronavirus/COVID19-daily-snapshot.pdf',
  SA:
    'https://www.sahealth.sa.gov.au/wps/wcm/connect/public+content/sa+health+internet/about+us/news+and+media/all+media+releases/all+media+releases',
  NT: 'https://securent.nt.gov.au/alerts/coronavirus-covid-19-updates',
  TAS: 'https://www.dhhs.tas.gov.au/news/2020',
  ACT:
    'https://www.health.act.gov.au/public-health-alert/updated-information-about-covid-19'
};

const CONTACT_BY_STATE = {
  NSW: {
    title: 'NSW - Known flights with confirmed cases',
    url:
      'https://www.health.nsw.gov.au/Infectious/diseases/Pages/coronavirus-flights.aspx'
  },
  NT: {
    url: 'https://coronavirus.nt.gov.au/home/homepage-news/contact-tracing'
  },
  QLD: {
    url: 'https://www.qld.gov.au/health/conditions/health-alerts/coronavirus-covid-19/current-status/current-status-and-contact-tracing-alerts'
  }
};

export const Summary = ({ id, todaySummarys, statistics }) => {
  const {
    totalConfirmedNumber,
    totalRecoveredNumber,
    totalDeathNumber,
    totalRemianNumber,
    todayNewNumber,
    otherStateNumber
  } = todaySummarys;
  const statistic = statistics.filter(statistic => statistic.State === id)[0];
  let wip, excluded, totalTested;
  if (statistic) {
    wip = statistic['under investigation'];
    excluded = statistic.excluded;
    totalTested = statistic['total tested'];
  }

  return (
    <div className='summary'>
      <h2 className='ui small header'>Summary data:</h2>
      <Grid columns='equal'>
        <Grid.Column>
          <Statistic color='blue' label='Remain' value={totalRemianNumber} />
        </Grid.Column>
        <Grid.Column>
          <Statistic color='red' label='Total' value={totalConfirmedNumber} />
        </Grid.Column>
        <Grid.Column>
          <Statistic color='grey' label='Death' value={totalDeathNumber} />
        </Grid.Column>
        {getToggle(TOGGLES.HIDE_RECOVERED) && (
          <Grid.Column>
            <Statistic
              color='green'
              label='Recovered'
              value={totalRecoveredNumber}
            />
          </Grid.Column>
        )}
      </Grid>
      <Table unstackable compact>
        <Table.Body>
          {
            <Table.Row negative>
              <Table.Cell>New cases today</Table.Cell>
              <Table.Cell>
                {todayNewNumber === 0 ? <>Pending data</> : todayNewNumber}
              </Table.Cell>
            </Table.Row>
          }
          {wip && (
            <Table.Row>
              <Table.Cell>Cases under investigation</Table.Cell>
              <Table.Cell>{wip}</Table.Cell>
            </Table.Row>
          )}
          {excluded && (
            <Table.Row>
              <Table.Cell>Cases tested and excluded</Table.Cell>
              <Table.Cell>{excluded}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
        {totalTested && (
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>Total tested</Table.HeaderCell>
              <Table.HeaderCell>{totalTested}</Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        )}
      </Table>
      <List bulleted>
        <List.Item>
          Data source:{' '}
          <a
            href={SOURCE_BY_STATE[id]}
            target='_blank'
            rel='noopener noreferrer'
          >
            {id} Health
          </a>
        </List.Item>
        {CONTACT_BY_STATE[id] && (
          <List.Item>
            <a
              href={CONTACT_BY_STATE[id].url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {CONTACT_BY_STATE[id].title || <>{id} - Contact tracing</>}
            </a>
          </List.Item>
        )}

        {otherStateNumber.all !== 0 && (
          <List.Item>
            <strong className='ui small'>
              * {otherStateNumber.all}{' '}
              {otherStateNumber.all === 1 ? (
                <>case is other state's resident</>
              ) : (
                <>cases are other state's residents</>
              )}
              , count in their number in national data.
            </strong>
          </List.Item>
        )}
      </List>
    </div>
  );
};

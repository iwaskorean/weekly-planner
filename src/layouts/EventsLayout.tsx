import React from 'react';
import Grid from '@components/Layout/Grid';
import Title from '@components/Feature/Title';
import Box from '@components/Layout/Box';
import EventField from '@components/TextField/EventField';
import NoteField from '@components/TextField/NoteField';
import ButtonBox from '@components/Layout/ButtonBox';
import ArrowButton from '@components/Button/ArrowButton';

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const weekend = ['Sat', 'Sun'];

export interface LayoutProps {
  handleLayout(): void;
}

export default function EventsLayout({ handleLayout }: LayoutProps) {
  return (
    <>
      <Grid buttonPosition='left'>
        <Box>
          <Title>EVENTS AND SCHEDULE</Title>
          {daysOfWeek.map((day) => (
            <React.Fragment key={day}>
              <EventField day={day} />
            </React.Fragment>
          ))}
        </Box>
        <Box>
          {weekend.map((day) => (
            <React.Fragment key={day}>
              <EventField day={day} />
            </React.Fragment>
          ))}
          <NoteField label='Note' />
        </Box>
        <ButtonBox>
          <ArrowButton direction='right' onClick={() => handleLayout()} />
        </ButtonBox>
      </Grid>
    </>
  );
}

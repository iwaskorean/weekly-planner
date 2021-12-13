import Grid from '@components/Layout/Grid';
import Box from '@components/Layout/Box';
import ButtonBox from '@components/Layout/ButtonBox';
import ArrowButton from '@components/Button/ArrowButton';
import NoteField from '@components/TextField/NoteField';
import { LayoutProps } from './EventsLayout';

export default function NotesLayout({ handleLayout }: LayoutProps) {
  return (
    <Grid buttonPosition='right'>
      <ButtonBox>
        <ArrowButton direction='left' onClick={() => handleLayout()} />
      </ButtonBox>
      <Box>
        <NoteField label='TO DO LIST' />
      </Box>
      <Box>
        <NoteField label='THINGS TO PREPARE FOR NEXT WEEK' />
      </Box>
    </Grid>
  );
}

import PropTypes from 'prop-types';
import { SectionTitle, SectionWrap } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionWrap>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionWrap>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

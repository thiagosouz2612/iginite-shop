import { styled } from "..";

export const HomeContainer = styled('main',{
    display: 'flex',
    gap: '3rem',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft: 'auto',
    minHeight: 656,

});

export const Product = styled ('a', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    cursor: 'pointer',


})
import { expect } from 'chai';
import { search, searchAlbums, searchArtists, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify Wrapper', () => {
  describe('smoke tests', () => {
    it('deve existir o método search', () => {
      expect(search).to.not.undefined;
    });

    it('deve retornar um array quando executar o método search', () => {
      expect(search()).to.be.a('array');
    });

    it('deve existir o método searchAlbums', () => {
      expect(searchAlbums).to.not.undefined;
    });

    it('deve retornar um array quando executar o método searchAlbums', () => {
      expect(searchAlbums()).to.be.a('array');
    });

    it('deve existir o método searchArtists', () => {
      expect(searchArtists).to.not.undefined;
    });

    it('deve retornar um array quando executar o método searchArtists', () => {
      expect(searchArtists()).to.be.a('array');
    });

    it('deve existir o método searchTracks', () => {
      expect(searchTracks).to.not.undefined;
    });

    it('deve retornar um array quando executar o método searchTracks', () => {
      expect(searchTracks()).to.be.a('array');
    });

    it('deve existir o método searchPlaylists', () => {
      expect(searchPlaylists).to.not.undefined;
    });

    it('deve retornar um array quando executar o método searchPlaylists', () => {
      expect(searchPlaylists()).to.be.a('array');
    });
  });
});

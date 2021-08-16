import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";

import { GamesService } from "./games.service"
import { Game } from '../data/game';

const listGames : Game[] =[
  {
    "id": 1,
    "tag": "new release",
    "title": "Horizon Zero Dawn ™",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "49,95",
    "image": "../assets/images/horizon.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal.\n• Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica.\n• Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja.\n• Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/horizon.png",
    "top": true,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 2,
    "tag": "new release",
    "title": "God of War ™",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "149,95",
    "image": "../assets/images/god-of-war.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/god-of-war-detail.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 3,
    "tag": "new release",
    "title": "Red Dead Redemption",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "189,95",
    "image": "../assets/images/red-dead-redemption.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/red-dead-redemption.png",
    "top": true,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 4,
    "tag": "new release",
    "title": "The Witcher 3: Wild",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "39,95",
    "image": "../assets/images/the-witcher-3.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/the-witcher-3.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 5,
    "tag": "new release",
    "title": "Howarts Legacy",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "49,95",
    "image": "../assets/images/howarts-legacy.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/howarts-legacy.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 6,
    "tag": "new release",
    "title": "Final Fantasy XVI",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "149,95",
    "image": "../assets/images/final-fantasy-xvi.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/final-fantasy-xvi.png",
    "top": true,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 7,
    "tag": "new release",
    "title": "Kena, bridge of spirits",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "189,95",
    "image": "../assets/images/kena-bridge-of-spirits.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/kena-bridge-of-spirits.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 8,
    "tag": "new release",
    "title": "Goodbye volcano highs",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "39,95",
    "image": "../assets/images/godbye-volcano-highs.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/godbye-volcano-highs.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 9,
    "tag": "new release",
    "title": "GhostWire: Tokyo",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "49,95",
    "image": "../assets/images/ghostwire-tokio.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/ghostwire-tokio.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 10,
    "tag": "new release",
    "title": "Horizon: Forbidden West",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "149,95",
    "image": "../assets/images/horizon-forbiddenwest.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/horizon-forbiddenwest.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 11,
    "tag": "new release",
    "title": "Bugsnax",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "189,95",
    "image": "../assets/images/bugsnax.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/bugsnax.png",
    "top": true,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 12,
    "tag": "new release",
    "title": "Resident Evil Village",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "39,95",
    "image": "../assets/images/resident-evil-village.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/resident-evil-village.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 13,
    "tag": "new release",
    "title": "Deathloop",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "49,95",
    "image": "../assets/images/deathloop.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/deathloop.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 14,
    "tag": "new release",
    "title": "Returnal",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "149,95",
    "image": "../assets/images/returnal.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/returnal.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 15,
    "tag": "new release",
    "title": "Jett: The Far Shore",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "189,95",
    "image": "../assets/images/jett-the-far-shore.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/jett-the-far-shore.png",
    "top": false,
    "topBG": "../assets/images/background.png"
  },
  {
    "id": 16,
    "tag": "new release",
    "title": "God of War: Ragnarok",
    "subtitle": "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    "price": "39,95",
    "image": "../assets/images/god-of-war-ragnarok.png",
    "description": "Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal. • Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica. • Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja. • Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.",
    "imgDetailBG": "../assets/images/god-of-war-detailBG.png",
    "imgDetail": "../assets/images/god-of-war-ragnarok.png"
  }
];

describe('GamesService', () => {

  let service : GamesService;
  let httpMock : HttpTestingController; //este mock es el que vamos a utilizar para simular las peticiones

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ], //no le pasamos declarations porque no va a haber componentes
      providers: [
        GamesService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })//.complieComponents no hay que hacerlo ya que hay un servicio no componentes. 
  })
  beforeEach(() => {
    //esta fn va a instanciar los servicios
    service = TestBed.inject(GamesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=> {
    httpMock.verify()
  });

  it('should be created service', () => {
    expect(service).toBeTruthy();
  });
  
  it('getGames', () => {
    service.getGames().subscribe((resp: Game[]) => {
      expect(resp).toEqual(listGames);
    })
  });

  it('getGameById will return the id of the game', () =>{
    let id = service.getGameById(listGames[0].id)
    expect(id).not.toBeNull();
  })   

  //SE NECESITA HACER UNA PETICION A UNA API
 /*  it('getGames retrun a list of games and is a get methord', () => {
    //creamos una lista falsa de games, basadas en el tipo de Game
    service.getGames().subscribe((resp: Game[]) => {
      expect(resp).toEqual(listGames) //nos suscribimos al metodo del servicio y lo igualamos al array creado en el test
    });
    const req = httpMock.expectOne('../data/data-games.ts') //url de la api a la que hacemos la solicitud
    expect(req.request.method).toBe('GET'); 
    req.flush(listGames);
  }) */   
})
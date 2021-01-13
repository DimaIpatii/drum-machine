/* eslint-disable react/prop-types */
// Clear DevTool [HMR] messages:
import {setLogLevel} from 'webpack/hot/log';
setLogLevel('error');

// Sass:
import './sass/main.scss';

//React:
import React from 'react';
import ReactDOM from 'react-dom';


const kits = [
    {
      name : 'Heater',
      id : 'kit-1',
      selected : true,
      tracks : [
        {
          keyCode: 81,
          id : 'heater-1',
          buttonName : 'Q',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
          audioName : 'Heater 1'
        },
        {
          keyCode: 87,
          id : 'heater-2',
          buttonName : 'W',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
          audioName : 'Heater 2'
        },
        {
          keyCode: 69,
          id : 'heater-1',
          buttonName : 'E',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
          audioName : 'Heater 3'
        },
        {
          keyCode: 65,
          id : 'heater-4',
          buttonName : 'A',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
          audioName : 'Heater 4'
        },
        {
          keyCode: 83,
          id : 'clap',
          buttonName : 'S',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
          audioName : 'Clap'
        },
        {
          keyCode: 68,
          id : 'open-hh',
          buttonName : 'D',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
          audioName : 'Open-HH'
        },
        {
          keyCode: 90,
          id : "kick-n'-hat",
          buttonName : 'Z',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
          audioName : "Kick-n'-Hat"
        },
        {
          keyCode: 88,
          id : 'kick',
          buttonName : 'X',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
          audioName : 'Kick'
        },
        {
          keyCode: 67,
          id : 'closed-hh',
          buttonName : 'C',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
          audioName : 'Closed-HH'
        }
      ]
    },
    {name : 'Piano',
     id : 'kit-2',
     selected : false,
      tracks : [
        {
          keyCode: 81,
          id : 'chord-1',
          buttonName : 'Q',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
          audioName : 'Chord 1'
        },
        {
          keyCode: 87,
          id : 'chord-2',
          buttonName : 'W',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
          audioName : 'Chord 2'
        },
        {
          keyCode: 69,
          id : 'chord-3',
          buttonName : 'E',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
          audioName : 'Chord 3'
        },
        {
          keyCode: 65,
          id : 'shaker',
          buttonName : 'A',
          url :'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
          audioName : 'Shaker'
        },
        {
          keyCode: 83,
          id : 'open-hh',
          buttonName : 'S',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
          audioName : 'Open-HH'
        },
        {
          keyCode: 68,
          id : 'closed-hh',
          buttonName : 'D',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
          audioName : 'Closed-HH'
        },
        {
          keyCode: 90,
          id : 'punchy-kick',
          buttonName : 'Z',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
          audioName : 'Punchy-Kick'
        },
        {
          keyCode: 88,
          id : 'side-stick',
          buttonName : 'X',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
          audioName : 'Side-Stick'
        },
        {
          keyCode: 67,
          id : 'snare',
          buttonName : 'C',
          url : 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
          audioName : 'Snare'
        }
  
      ]
    }
    
  ];
  
  
  
  const appState = {
    power : false,
    kits : kits,
    volumeLevel : 0.5,
  }
  
  const SWITCH_POWER = 'SWITCH_POWER';
  const VOLUME_LEVEL = 'VOLUME_LEVEL';
  const SELECTED_KIT = 'SELECTED_KIT';
  
  const reducer = (state,action) => {
      if(action.type === SWITCH_POWER){
          state.power = {power : action.playload.power};
          return {...state, ...state.power};
      }
    
      if(action.type === VOLUME_LEVEL){
        state.volumeLevel =  action.playload.volumeLevel;
        return {...state};
      }
    
      if(action.type === SELECTED_KIT){
  
        const kits = state.kits.map(kit => {
          
          if(kit.id === action.playload.id){
            kit.selected = true;
            return kit;
          }
          
          kit.selected = false;
          return kit;
          
        });
        
        return {...state, kits};
      }
    
    return state;
  }
  
  
  
  
  const ControllPanel = ({appState, togglePower, getVolumeLevel, getSelectedKit, clipName}) => {
    
    const [power,setPower] = React.useState(false);
    const [volumeButtonState, setVolumeButtonState] = React.useState(false);
    const [volume, setVolume] = React.useState(appState.volumeLevel);
    const [kit, setKit] = React.useState('');
    const [clip,setClip] = React.useState('')
    
    const togglePowerButton = () => {
      setPower(!power);
      togglePower(power);
    }
    
    const toggleVolumeButton = () => setVolumeButtonState(!volumeButtonState);
    const setVolumeLevel = (event) => setVolume(Number(event.target.value));
    const selectKit = (event) => {
      getSelectedKit(event.target.id)
      setClip('');
    };
    
    React.useEffect(() => {
      getVolumeLevel(volume);
    }, [volume]);
    
    React.useEffect(() => {
      const {name} = appState.kits.find(kit => kit.selected === true);
      setKit(name);
    },[appState.kits]);
    
    React.useEffect(() => {
      setClip(clipName);
    },[clipName]);
    
    return (
    <header className="app-controller">
        
        {/*Controller Top*/}
        <div className="controller-top">
            
            <label htmlFor="on" className={`switch-button ${appState.power ? '' : 'off'}`}>
              <input type="checkbox" defaultChecked='checked' onClick={togglePowerButton} name="switch" id="on" className="switch-button-input"/>  
            </label>
          
          
          <div id="screen" className={`screen ${appState.power ? 'screen_active' : ''}`}>
            <div id="display" className="screen__clip">{ appState.power ? clip : ''}</div>
            <div id="display-kit" className="screen__kit" >
              {appState.power ? `Kits: ${kit}` : ''}
            </div>
          </div>
          
          
          <div className="volume">
            
            <button type="button" className="volume__button" onClick={toggleVolumeButton}>
              <i className="volume__icon"><ion-icon name="volume-high-outline"></ion-icon></i>
             </button>
            
             <div className={`volume__level ${volumeButtonState ? 'show-volume-level' : ''}`}>
               <label htmlFor='volume-range'>
                 <input 
                   type="range" 
                   id="volume-range" 
                   className='volume__range' 
                   min="0" 
                   max="1" 
                   value={volume} 
                   step='0.1' 
                   onChange={setVolumeLevel}
                   />
      
                 
               </label>
             </div>
            
          </div>
        </div>
        
        {/*Controller Kits Bottom*/}
        <div className="kits">
          {appState.kits.length > 0 
            ? (appState.kits.map(kitButton => {
              return (
                 <button
                    key={kitButton.id}
                    id={kitButton.id}
                    type="button" 
                    className={`kits__item ${appState.power ? 'kits__item_active' : ''} ${kitButton.selected && appState.power ? 'selected-kit' : ''} `}
                    onClick={selectKit}
                   >
                    {kitButton.name}
                    
                 </button>
              )
            })
             
          ):('')
          }
          </div>
      </header>
    )
  }
  
  const Clips = ({appState, selectedClip}) => {
    const [trackList, setTacks] = React.useState([]);
    
    // ****************************
    // Clip Controller:
    // ****************************
    const playClip = (keyCode) => {
        let clip;
      
        switch(true) {
          case keyCode == 81:
            clip = document.getElementById('Q');
            break;
          case keyCode == 87:
            clip = document.getElementById('W');
            break;
          case keyCode == 69:
            clip = document.getElementById('E');
            break;
          case keyCode == 65:
            clip = document.getElementById('A');
            break;
          case keyCode == 83:
            clip = document.getElementById('S');
            break;
          case keyCode == 68:
            clip = document.getElementById('D');
            break;
          case keyCode == 90:
            clip = document.getElementById('Z');
            break;
          case keyCode == 88:
            clip = document.getElementById('X');
            break;
          case keyCode === 67:
            clip = document.getElementById('C');
            break;
           default : 
              return;
        }
  
        if(appState.power === true){
            clip.play();
            selectedClip(clip.closest('button').name);
        } 
    }
   
    // Get tracks list from from selected kit:
    React.useEffect(() => {
      const {tracks} = appState.kits.find(kit => kit.selected === true);
      setTacks([...tracks]);
       
    },[appState.kits]);
    
    // Volume Controller
    React.useEffect(() => {
      const clips = Array.from(document.querySelectorAll('.clip'));
      clips.forEach(el => el.volume = appState.volumeLevel)
    },[appState.volumeLevel]);
    
    // Play clip pressing clip button
    React.useEffect(() => {
     document.addEventListener("keydown",(event) =>  {
       playClip(event.keyCode);
     });
    },[]);
   
    
    
    return (
     <main className="main">
         {trackList.length > 0
          ? (
          trackList.map(track => {
            
                return (
                   <button
                     type="button"
                     key={track.keyCode}
                     id={track.id} 
                     className={`drum-pad ${appState.power ? 'drumpad-active' : '' }`} name={track.audioName} 
                     onClick={(event) => {
                      playClip(Number(event.target.dataset.keycode))
                    }}
                    data-keycode={track.keyCode}
                     >
                      <audio id={track.buttonName} src={track.url} className="clip"></audio>
                      {track.buttonName}
                      
                </button>
                )
            })
            ) 
          : ('')}
       
      </main>
    )
  };
  
  
  const App = () => {
    const [app, dispatch] = React.useReducer(reducer, appState);
    const [clipName, setClipName] = React.useState('');
    
    
    // ****************************
    // Reducer State:
    // ****************************
    // Get Power State:
    const power = (powerState) => {
      return dispatch({
        type : SWITCH_POWER,
        playload : {
          power : powerState,
        }
      })
    };
    
    // Get Volume Level State:
    const volumeLevel = (volume) => {
        
        return dispatch({
          type : VOLUME_LEVEL,
          playload : {
            volumeLevel : volume,
          }
        })
    }
    
    // Get Selected Kits State:
    const selectedKit = (kitId) => {
      return dispatch({
        type : SELECTED_KIT,
        playload : { id : kitId }
      });
      
    };
    
    return (
      <div id="drum-machine" className="app" >
        <ControllPanel appState={app} togglePower={power} getVolumeLevel={volumeLevel} getSelectedKit={selectedKit} clipName={clipName} />
        <Clips appState={app} selectedClip={setClipName} />
      </div>
    )
  };
  
  
  ReactDOM.render(<App />, document.getElementById('root'));
  
  
  


module.hot.accept();
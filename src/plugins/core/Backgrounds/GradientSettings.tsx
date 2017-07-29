import * as React from 'react';
import { Settings } from '../../interfaces';

interface Props {
  angle?: number;
  from?: string;
  to?: string;
  type?: string;
  onChange: (settings: Settings) => void;
}

class GradientSettings extends React.Component<Props> /* implements Plugin - Not working because static */ {
  static defaultProps = {
    angle: 45,
    from : '#43cea2',
    to: '#185a9d',
    type: 'linear-gradient',
  };

  render() {
    return (
      <div>
        <label>
          From Colour
          <input
            type="color"
            value={this.props.from}
            onChange={event => this.props.onChange({ from: event.target.value })}
          />
        </label>

        <label>
          To Colour
          <input
            type="color"
            value={this.props.to}
            onChange={event => this.props.onChange({ to: event.target.value })}
          />
        </label>

        <label>
          Angle (0-360)
          <input
            type="number"
            value={this.props.angle}
            onChange={event => this.props.onChange({ angle: event.target.value })}
          />
        </label>
      </div>
    );
  }
}

export default GradientSettings;

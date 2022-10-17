import Component from 'flarum/common/Component';
import tagIcon from '../../common/helpers/tagIcon';

export default class TagHero extends Component {
  view() {
    const tag = this.attrs.model;
    const color = tag.color();

    return (
      <header className={'Hero TagHero' + (color ? ' TagHero--colored' : '')}>
        <div className="container">
          <div className="containerNarrow">
            <h2 className="Hero-title">
              {tag.icon() && tagIcon(tag, {}, { useColor: true })} {tag.name()}
            </h2>
            <div className="Hero-subtitle">{tag.description()}</div>
          </div>
        </div>
      </header>
    );
  }
}

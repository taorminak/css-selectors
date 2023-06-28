export default class Level {
  public layout: string;

  public htmlCode: string;

  public highlightedElements: string[];

  public correctSelector: string;

  constructor(layout: string, htmlCode: string, highlightedElements: string[], correctSelector: string) {
    this.layout = layout;
    this.htmlCode = htmlCode;
    this.highlightedElements = highlightedElements;
    this.correctSelector = correctSelector;
  }
}

export const levels: Level[] = [
  new Level(
    `<div class="island">
  <chest class="chest"></chest>
</div>`,
    '&lt;div class="island"&gt;&lt;chest&gt;&lt;/chest&gt;&lt;/div&gt;',
    ['chest'],
    'chest',
  ),
  new Level(
    '<div class="island">map/><chest class="chest"></chest><map/></div>',
    '&lt;div class="island"&gt;&lt;map/&gt;&lt;chest&gt;&lt;/chest&gt;&lt;map/&gt;&lt;/div&gt;',
    ['map'],
    'map',
  ),
  new Level(
    '<div class="island"><chest class="chest"><coins/></chest></div>',
    '&lt;div class="island"&gt;&lt;chest&gt;&lt;coins/&gt;&lt;/chest&gt;&lt;/div&gt;',
    ['coins'],
    'coins',
  ),
  new Level(
    '<div class="island"><chest class="chest"><coins/></chest></div>',
    '&lt;div class="island"&gt;&lt;chest&gt;&lt;coins/&gt;&lt;/chest&gt;&lt;/div&gt;',
    ['coins'],
    'coins',
  ),
  new Level(
    '<div class="island"><key/><chest class="chest"></chest><key class="small"/><map/></div>',
    '&lt;div class="island"&gt;&lt;key/&gt;&lt;chest&gt;&lt;coins/&gt;&lt;/chest&gt;&lt;key class="small"/&gt;&lt;map/&gt;&lt;/div&gt;',
    ['key.small'],
    'key.small',
  ),
  new Level(
    '<div class="island"><telescope/><chest></chest><key class="small"/><map/><telescope class="small"/></div>',
    '&lt;div class="island"&gt;&lt;telescope/&gt;&lt;chest/&gt;&lt;key class="small"/&gt;&lt;map/&gt;&lt;telescope class="small"/&gt;&lt;/div&gt;',
    ['telescope.small'],
    'telescope.small',
  ),
  new Level(
    '<div class="island"><chest class="chest"><coins/></chest><map/><key/><treasure/></div>',
    '&lt;div class="island"&gt;&lt;chest&gt;&lt;coins/&gt;&lt;/chest&gt;&lt;map/&gt;&lt;key/&gt;&lt;treasure/&gt;&lt;/div&gt;',
    ['chest coins, key'],
    'chest coins, key',
  ),
  new Level(
    '<div class="island"><treasure/><chest class="chest"></chest><map/><telescope/><coins/></div>',
    '&lt;div class="island"&gt;&lt;treasure/&gt;&lt;chest&gt;&lt;coins/&gt;&lt;/chest&gt;&lt;map/&gt;&lt;telescope/&gt;&lt;coins/&gt;&lt;/div&gt;',
    ['*'],
    '*',
  ),
  new Level(
    '<div class="island"><map/><treasure/><key/><hat/><telescope/></div>',
    '&lt;div class="island"&gt;&lt;map/&gt;&lt;treasure/&gt;&lt;key/&gt;&lt;hat/&gt;&lt;telescope/&gt;&lt;/div&gt;',
    ['hat ~ telescope'],
    'hat ~ telescope',
  ),
  new Level(
    '<div class="island"><hat/><chest class="chest"/><map><key/></map><treasure/></div>',
    '&lt;div class="island"&gt;&lt;hat/&gt;&lt;chest/&gt;&lt;map&gt;&lt;key/&gt;&lt;/map&gt;&lt;treasure/&gt;&lt;/div&gt;',
    ['map > key'],
    'map > key',
  ),

];

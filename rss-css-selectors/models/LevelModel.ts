export default class Level {
  public layout: string;

  public htmlCode: string;

  public levelsDescription: string;

  public highlightedElements: string[];

  public correctSelector: string;

  public completed: boolean;

  public hintUsed: boolean;

  constructor(
    layout: string,
    htmlCode: string,
    levelsDescription: string,
    highlightedElements: string[],
    correctSelector: string,
    completed: boolean,
    hintUsed: boolean
  ) {
    this.layout = layout;
    this.htmlCode = htmlCode;
    this.levelsDescription = levelsDescription;
    this.highlightedElements = highlightedElements;
    this.correctSelector = correctSelector;
    this.completed = completed;
    this.hintUsed = hintUsed;
  }
}

export const levels: Level[] = [
  new Level(
    '<div class="island"><chest class="chest"></chest></div>',
    '&lt;div class="island"&gt;<br>&nbsp;&nbsp;&lt;chest/&gt;<br>&lt;/div&gt;',
    "Type Selector. Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.",
    ["chest"],
    "chest",
    false,
    false
  ),
  new Level(
    '<div class="island"><map></map><chest class="chest"></chest><map class="small"></map></div>',
    '&lt;div class="island"&gt;<br>&nbsp;&nbsp;&lt;map/&gt;<br>&nbsp;&nbsp;&lt;chest/&gt;<br>&nbsp;&nbsp;&lt;map class="small"/&gt;<br>&lt;/div&gt;',
    "Type Selector. Selects all elements of type A. Type refers to the type of tag, so div, p and ul are all different element types.",
    ["map"],
    "map",
    false,
    false
  ),
  new Level(
    '<div class="island"><chest class="chest" id="open"><coins></coins></chest></div>',
    '&lt;div class="island"&gt;<br>&nbsp;&nbsp;&lt;chest&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;coins/&gt;<br>&nbsp;&nbsp;&lt;/chest&gt;<br>&lt;/div&gt;',
    "Descendant Selector. Selects all B inside of A. B is called a descendant because it is inside of another element",
    ["chest coins"],
    "chest coins",
    false,
    false
  ),
  new Level(
    '<div class="island"><key></key><chest class="chest"></chest><key class="small"></key><map></map></div>',
    '&lt;div class="island"&gt;<br>&nbsp;&nbsp;&lt;key/&gt;<br>&nbsp;&nbsp;&lt;chest/&gt;<br>&nbsp;&nbsp;&lt;key class="small"/&gt;<br>&nbsp;&nbsp;&lt;map/&gt;<br>&lt;/div&gt;',
    "Class Selector. The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes",
    [".small"],
    ".small",
    false,
    false
  ),
  new Level(
    '<div class="island"><telescope class="small"></telescope><chest></chest><key class="small"></key><map></map><telescope></telescope></div>',
    '&lt;div class="island"&gt;<br>&nbsp;&nbsp;&lt;telescope class="small"/&gt;<br>&nbsp;&nbsp;&lt;chest/&gt;<br>&nbsp;&nbsp;&lt;key class="small"/&gt;<br>&nbsp;&nbsp;&lt;map/&gt;<br>&nbsp;&nbsp;&lt;telescope/&gt;<br>&lt;/div&gt;',
    "Combine the Class Selector. You can combine the class selector with other selectors, like the type selector",
    ["telescope.small"],
    "telescope.small",
    false,
    false
  ),
  new Level(
    '<div class="island"><chest></chest><map></map><chest id="open"></chest><key></key></div>',
    '&lt;div class="island"&gt;<br>&nbsp;&nbsp;&lt;chest/&gt;<br>&nbsp;&nbsp;&lt;map/&gt;<br>&nbsp;&nbsp;&lt;chest id="open"/&gt;<br>&nbsp;&nbsp;&lt;key/&gt;<br>&lt;/div&gt;',
    "ID Selector. Selects the element with a specific id. You can also combine the ID selector with the type selector.",
    ["#open"],
    "#open",
    false,
    false
  ),
  new Level(
    '<div class="island"><map></map><key></key><treasure></treasure><chest class="chest" id="open"><coins></coins></chest></div>',
    '&lt;div class="island"&gt;<br>&nbsp;&nbsp;&lt;map/&gt;<br>&nbsp;&nbsp;&lt;key/&gt;<br>&nbsp;&nbsp;&lt;treasure/&gt;<br>&nbsp;&nbsp;&lt;chest&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;coins/&gt;<br>&nbsp;&nbsp;&lt;/chest&gt<br>&lt;/div&gt;',
    "Comma Combinator.Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.",
    ["chest coins, treasure"],
    "chest coins, treasure",
    false,
    false
  ),
  new Level(
    '<div class="island"><treasure></treasure><chest class="chest"></chest><map></map><telescope></telescope><hat></hat></div>',
    '&lt;div class="island"&gt;<br>&nbsp;&nbsp;&lt;treasure/&gt;<br>&nbsp;&nbsp;&lt;chest/&gt;<br>&nbsp;&nbsp;&lt;map/&gt;<br>&nbsp;&nbsp;&lt;telescope/&gt;<br>&nbsp;&nbsp;&lt;hat/&gt;<br>&lt;/div&gt;',
    "The Universal Selector. You can select all elements with the universal selector!",
    ["*"],
    "*",
    false,
    false
  ),
  new Level(
    '<div class="island"><map></map><treasure></treasure><key></key><hat></hat><telescope></telescope></div>',
    '&lt;div class="island"&gt;<br>&nbsp;&nbsp;&lt;map/&gt;<br>&nbsp;&nbsp;&lt;treasure/&gt;<br>&nbsp;&nbsp;&lt;key/&gt;<br>&nbsp;&nbsp;&lt;hat/&gt;<br>&nbsp;&nbsp;&lt;telescope/&gt;<br>&lt;/div&gt;',
    "General Sibling Selector. You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following elements instead of one.",
    ["hat ~ telescope"],
    "hat ~ telescope",
    false,
    false
  ),
  new Level(
    '<div class="island"><key></key><chest class="chest"></chest><treasure></treasure><map><hat></hat></map></div>',
    '&lt;div class="island"&gt;<br>&nbsp;&nbsp;&lt;key/&gt;<br>&nbsp;&nbsp;&lt;chest/&gt;<br>&nbsp;&nbsp;&lt;treasure/&gt;&nbsp;<br>&nbsp;&lt;map&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;hat/&gt;<br>&nbsp;&nbsp;&lt;/map&gt;<br>&lt;/div&gt;',
    "Child Selector. You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element.",
    ["map > key"],
    "map > hat",
    false,
    false
  ),
];

# css-longhand

`npm install @team-griffin/css-longhand --save`

`yarn add @team-griffin/css-longhand`

An inline css utility which makes creating lots of longhand properties easy.

When using inline css solutions such as radium and react css it is recommended that a developer writes out each of the css properties in longhand. This is to ensure that style merges do not override unexpected properties.

This is where css-longhand comes in.

## Usage

```javascript
import cssLonghand from '@team-griffin/css-longhand';

cssLonghand('margin', {
  left: 10,
  right: 10,
  top: 20,
  bottom: 20,
});

// Out
{
  marginLeft: 10,
  marginRight: 10,
  marginTop: 20,
  marginBottom: 20,
}

```
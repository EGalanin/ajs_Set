import Character from '../character';
import Team from '../team';

test('добавить персонаж', () => {
  const testCharacter = new Character('testCharacter');
  const team = new Team();
  team.add(testCharacter);
  expect(team.members).toEqual(new Set([{ name: 'testCharacter' }]));
  // console.log(team);
});

test('добавить повторно персонаж', () => {
  const testCharacter = new Character('testCharacter');
  const team = new Team();
  team.add(testCharacter);
  expect(() => team.add(testCharacter)).toThrow(`Игрок ${testCharacter.name} уже состоит в команде`);
});

test('добавить группу персонажей', () => {
  const testCharacter = new Character('testCharacter');
  const testCharacter2 = new Character('testCharacter2');
  const testCharacter3 = new Character('testCharacter3');
  const team = new Team();
  team.addAll(testCharacter, testCharacter2, testCharacter3);
  expect(team.members).toEqual(new Set([
    { name: 'testCharacter' },
    { name: 'testCharacter2' },
    { name: 'testCharacter3' },
  ]));
  // console.log(team);
});

test('конвертация в массив', () => {
  const testCharacter = new Character('testCharacter');
  const testCharacter2 = new Character('testCharacter2');
  const testCharacter3 = new Character('testCharacter3');
  const team = new Team();
  team.addAll(testCharacter, testCharacter2, testCharacter3);
  expect(team.toArayy()).toEqual([
    { name: 'testCharacter' },
    { name: 'testCharacter2' },
    { name: 'testCharacter3' },
  ]);
  // console.log(team);
});

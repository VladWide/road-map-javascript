// Узел двусвязного списка
// Двусвязный список
// Prepend
// Append
// Delete
// Find
// DeleteTail
// DeleteHead
// FromArray
// ToArray
// ToString
// Reverse
// Вывод
// Если ты пока ещё не знаком со связным списком и желаешь узнать о нём больше, то лови ссылку.

// В же этом посте я остановлюсь на двусвязном списке.

// Двусвязный список - это структура связанных данных, которая состоит из набора последовательно-связанных записей, называемых узлами. Каждый узел содержит два поля, называемые ссылками, которые являются ссылками на предыдущий (previous) и последующий (next) узел.

// Если ты хочешь сразу перейти к коду и пропустить объяснение - можешь посмотреть его здесь (TypeScript).

// Узел двусвязного списка
// Подобно односвязному списку, двусвязный список состоит из серии узлов. Вот, простое представление в JavaScript:

// class DoublyLinkedListNode {
//   constructor(value, next = null, previous = null) {
//     this.value = value;
//     this.next = next;
//     this.previous = previous;
//   }

//   toString(callback) {
//     return callback ? callback(this.value) : `${this.value}`;
//   }
// }
// В классе DoublyLinkedListNode, свойство value, содержит значение, которое должен хранить элемент связанного списка; next свойство - указатель на следующий элемент в списке, а previous свойство - указатель на предыдущий элемент в списке. И next, и previous указатели начинаются с null, так как оба этих узла не известны в момент создания класса.

// Двусвязный список (DoublyLinkedList)
// Теперь углубимся в класс DoublyLinkedList. Вот простой пример:

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
// }
// Наш список узлов будет содержать десять методов:

// prepend(значение): принимает значение и создаёт новый узел с этим значением, помещая его в начало связного списка;
// append(значение): принимает значение и создаёт новый узел с этим значением, помещая его в конец связного списка;
// delete(значение): принимает значение и удаляет все узлы, которые имеют указаное значение;
// find(значение): принимает значение и находит первый узел с таким же значением;
// deleteTail(): удаляет последний узел из списка;
// deleteHead(): удаляет первый узел из списка;
// fromArray(массив значений): принимает массив значений и создаёт новые узлы из каждого элемента массива, добавляя их в конец списка;
// toArray(): создаёт массив из всех узлов;
// toString(обратный вызов): принимает обратный вызов (не обязательно) и создаёт строку из всех значений узлов;
// reverse(): создаёт обратный список, меняя узлы местами.
// Когда создаётся экземпляр класса DoublyLinkedList, вызывается функция конструктора для инициализации объекта со свойством head и tail. Указателям head и tail присваивается значение null, поскольку при первоначальном создании объекта связного списка он не содержит никаких узлов.

// Prepend
// Prepend метод принимает значение в качестве аргумента и создаёт новый узел с этим значением, помещая его в начало связного списка.

// prepend(value) {
//   // Создаём новый узел, который будет новым head,
//   // при создании передаём второй аргумент, который указывает
//   // что его "next" будет текущий head,
//   // так как новый узел будет стоять перед текущем head.
//   const newNode = new DoublyLinkedListNode(value, this.head);

//   // Если есть head, то он больше не будет head.
//   // Поэтому, его ссылку на предыдущий узел (previous) меняем на новый узел.
//   if (this.head) {
//     this.head.previous = newNode;
//   }

//   // Переназначаем head на новый узел
//   this.head = newNode;

//   // Если ещё нет tail, делаем новый узел tail.
//   if (!this.tail) {
//     this.tail = newNode;
//   }

//   // Возвращаем весь список.
//   return this;
// }
// Append
// Append метод принимает значение в качестве аргумента и создаёт новый узел с этим значением, помещая его в конец связного списка.

// append(value) {
//   // Создаём новый узел.
//   const newNode = new DoublyLinkedListNode(value);

//   if (this.tail) {
//     // Присоединяем новый узел к концу связного списка.
//     this.tail.next = newNode;
//   }

//   // В новом узле указываем ссылку на предыдущий (previous) элемент на this.tail,
//   // так как новый узел будет теперь последним.
//   newNode.previous = this.tail;

//   // Переназначаем tail на новый узел.
//   this.tail = newNode;

//   // Если ещё нет head, делаем новый узел head.
//   if (!this.head) {
//     this.head = newNode;
//   }

//   return this;
// }
// Delete
// Delete метод принимает значение в качестве аргумента, удаляет все узлы, которые имеют указаное значение и возвращает последний удалённый узел.

// delete(value) {
//   // Если нет head значит список пуст.
//   if (!this.head) {
//     return null;
//   }

//   let deletedNode = null;
//   let currentNode = this.head;

//   // Перебираем все узлы и удаляем их, если их значение равно указанному.
//   while (currentNode) {
//     if (currentNode.value === value) {
//       // Сохраняем значение текущего узла как удаленное.
//       deletedNode = currentNode;

//       // Если head должен быть удален,
//       if (deletedNode === this.head) {
//         // то делаем следующий узел новым head
//         this.head = deletedNode.next;

//         // Меняем в новом head ссылку (previous) на null.
//         if (this.head) {
//           this.head.previous = null;
//         }

//         // Если все узлы в списке имеют одинаковое значение,
//         // которое передается в качестве аргумента,
//         // тогда все узлы будут удалены. Поэтому tail необходимо обновить.
//         if (deletedNode === this.tail) {
//           this.tail = null;
//         }
//       } else if (deletedNode === this.tail) {
//         // Если tail должен быть удален, -
//         // меняем tail на предпоследний узел, который станет новым хвостом.
//         this.tail = deletedNode.previous;
//         // Обновляем ссылку next в новом хвосте.
//         this.tail.next = null;
//       } else {
//         // Если средний узел будет удален, -
//         // сохраняем ссылку на предыдущий элемент,
//         const previousNode = deletedNode.previous;
//         // и сохраняем ссылку на следующий элемент.
//         const nextNode = deletedNode.next;
//         // Меняем ссылки у предыдущего и следующего узлов от удаленного узла,
//         // чтобы они больше не ссылались на удаленный узел.
//         previousNode.next = nextNode;
//         nextNode.previous = previousNode;
//       }
//     }

//     // Перематываем на один узел вперёд.
//     currentNode = currentNode.next;
//   }

//   return deletedNode;
// }
// Find
// Find метод принимает значение в качестве аргумента, находит первый узел с таким же значением и возвращает его.

// find(value) {
//   // Если нет head - список пуст.
//   if (!this.head) {
//     return null;
//   }

//   let currentNode = this.head;

//   // Перебираем все узлы в поиске значения.
//   while (currentNode) {
//     // Если указано значение, пробуем сравнить его по значению.
//     if (value !== undefined && currentNode.value === value) {
//       return currentNode;
//     }

//     // Перематываем на один узел вперед.
//     currentNode = currentNode.next;
//   }

//   return null;
// }
// DeleteTail
// DeleteTail - метод, который удаляет последний узел из списка и возвращает его.

// deleteTail() {
//   // Если нет tail - список пуст.
//   if (!this.tail) {
//     return null;
//   }

//   // Сохраняем значение последнего узла.
//   const deletedTail = this.tail;

//   // Если у tail есть ссылка на предыдущий узел,
//   if (this.tail.previous) {
//     // переназначаем tail на предыдущий узел,
//     this.tail = this.tail.previous;
//     // обновляем ссылку на следующий узел.
//     this.tail.next = null;
//   } else {
//     // Если есть tail, но у него нет ссылки на предыдущий узел,
//     // значит в списке только один узел и мы его удалили.
//     // Поэтому обнуляем всё.
//     this.head = null;
//     this.tail = null;
//   }

//   return deletedTail;
// }
// DeleteHead
// DeleteHead - метод, который удаляет из списка первый узел и возвращает его.

// deleteHead() {
//   // Если нет head - список пуст.
//   if (!this.head) {
//     return null;
//   }

//   // Сохраняем значение первого узла.
//   const deletedHead = this.head;

//   // Если у head есть ссылка на следующий узел,
//   if (this.head.next) {
//     // переназначаем head на следующий узел,
//     this.head = this.head.next;
//     // обновляем ссылку на следующий узел.
//     this.head.previous = null;
//   } else {
//     // Если есть head, но у него нет ссылки на следующий узел,
//     // значит в списке только один узел и мы его удалили.
//     // Поэтому обнуляем всё.
//     this.head = null;
//     this.tail = null;
//   }

//   return deletedHead;
// }
// FromArray
// FromArray - принимает массив значений в качестве аргумента и создаёт новые узлы из каждого элемента массива, по очереди добавляя их в конец списка.

// // Создаём новые узлы из массива и добавляем в конец списка.
// fromArray(values) {
//   values.forEach(value => this.append(value));

//   return this;
// }
// ToArray
// ToArray - метод, что создаёт массив из всех узлов и возвращает его.

// // Создаём массив из всех узлов.
// toArray() {
//   const nodes = [];

//   let currentNode = this.head;

//   // Перебираем все узлы и добавляем в массив.
//   while (currentNode) {
//     nodes.push(currentNode);
//     currentNode = currentNode.next;
//   }

//   // Возвращаем массив из всех узлов.
//   return nodes;
// }
// ToString
// ToString - принимает обратный вызов в качестве аргумента (не обязательно) и создаёт строку из всех значений узлов.

// Если значение value узла является объектом, нужно указать callback, который достанет из этого объекта значение в виде строки. Если же мы передадим объект в метод toString, то получим "[object Object]";

// toString(callback) {
//   // Сначала создаём массив из всех узлов.
//   return this.toArray()
//     // На каждом узле вызываем метод toString,
//     // что бы получить значение в виде строки.
//     .map(node => node.toString(callback))
//     // Вызываем метод toString на массиве строк.
//     .toString();
// }
// callback может выглядеть так:

// // value - это объект
// const nodeStringifier = value => `${value.key}:${value.value}`;
// Reverse
// Reverse - метод, создающий обратный список, сменой узлов местами. Первый узел становится последним, а последний первым; все узлы и их ссылки меняются соответственно.

// // Обратный список.
// reverse() {
//   let currNode = this.head;
//   let prevNode = null;
//   let nextNode = null;

//   // Перебираем все узлы.
//   while (currNode) {
//     // Сохраняем предыдущий и следующий узлы.
//     nextNode = currNode.next;
//     prevNode = currNode.previous;

//     // Меняем ссылку на следующий "next" узел текущего узла,
//     // чтобы он ссылался на предыдущий узел.
//     // Так как мы меняем их местами, нужно поменять и ссылки на узлы.
//     // Изначально, первый узел не имеет предыдущего узла,
//     // поэтому после перестановки его "next" станет "null".
//     currNode.next = prevNode;

//     // Меняем ссылку на предыдущий "previous" узел текущего узла,
//     currNode.previous = nextNode;

//     // Перемещаем узлы prevNode и currNode на один шаг вперед.

//     // Текущий узел делаем предыдущим.
//     prevNode = currNode;

//     // Следующий узел становится текущим.
//     currNode = nextNode;
//   }

//   // Меняем head и tail местами.
//   this.tail = this.head;

//   // В данном случае prevNode это последний узел,
//   // поэтому, после reverse, он становится первым.
//   this.head = prevNode;

//   // Возвращаем список.
//   return this;
// }
// Вывод
// Двусвязные списки похожи на односвязные тем, что каждый узел имеет указатель на следующий узел в списке. Но, различие состоит в том, что каждый узел также имеет указатель на предыдущий узел в списке, что позволяет легко перемещаться вперед и назад по списку.
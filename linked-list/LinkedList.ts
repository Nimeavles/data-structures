class LinkedNode<T> {
    value: T;
    next: LinkedNode<T> | null;

    constructor(value: T, next: LinkedNode<T> | null = null) {
        this.value = value;
        this.next = next
    }
}

class LinkedList<T> {
    head: LinkedNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert The Head Node
    add(data: T) {
        const newNode = new LinkedNode(data);
        newNode.next = null;

        if (this.head === null) {
            this.head = newNode
        } else {
            const last: LinkedNode<T> | null = this.getLastNode();
            if (last) {
                last.next = newNode;
            }
        }

        this.size++;
    }

    //Get Last Node
    getLastNode(): LinkedNode<T> | null {
        if (this.head === null) {
            return null;
        }

        let last: LinkedNode<T> = this.head;
        let control: LinkedNode<T> | null = this.head;

        while (control !== null) {
            last = control;
            control = last.next
        }

        return last;
    }

    //Get Node At
    getNodeAt(pos: number): LinkedNode<T> | null {
        //Just to validate that at least we have one node
        if (this.head === null || (this.size - 1) < pos) return null;

        let control: LinkedNode<T> | null = this.head;
        let x: number = 0;

        while (control !== null) {
            //If x = pos, we have find the node
            if (x === pos) break;
            x++;
            control = control.next;
        }

        return control;
    }

    //Append Node
    append(node: LinkedNode<T> | null, data: T) {
        if (this.head === null || node === null) return;

        const newNode = new LinkedNode(data);
        let prev: LinkedNode<T> | null = node;
        let next = node.next;

        prev.next = newNode;
        newNode.next = next;
        this.size++;
    }

    //Delete Node
    delete(node: LinkedNode<T> | null) {
        if (this.head === null || node === null ) return;

        let control: LinkedNode<T> | null = this.head;
        let temp: LinkedNode<T> | null = null;

        if (node === this.head) {
            //Delete the Head
            temp = this.head;
            this.head = this.head.next;

            //Release the memory, as we are not usign that variable
            temp = null;
            return;
        }
        
        while (control.next !== node) {
            control = control.next;
        }

        temp = control.next;
        control.next = temp.next;
        temp = null;

        this.size--;

    }

    //Print Linked List
    print() {
        let node = this.head;
        while (node !== null) {
            console.log(`-> ${node?.value}`);
            node = node.next
        }
    }
}


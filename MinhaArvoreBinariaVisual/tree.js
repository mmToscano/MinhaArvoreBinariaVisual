class Node {

    constructor(value){
        this.Value = value;
        this.Left = null;
        this.Right = null;
    }


    insert(value){

        var newNode = new Node(value);

        if(newNode != null){
            if(newNode.Value >= this.Value){
                if(this.Right == null){
                    this.Right = newNode;
                }else{
                    this.Right.insert(value);
                }
            }else{
                if(this.Left == null){
                    this.Left = newNode;
                }else{
                    this.Left.insert(value);
                }
            }
        }
    }
}

class Tree {

    constructor(){
        this.Root = null;
    }

    insert(value){
        var newNode = new Node(value);

        this.insertNode(newNode);
    }

    insertNode(newNode){
        if(this.Root == null){
            this.Root = newNode;
        }else{
            this.Root.insert(newNode.Value);
        }
    }
}

tree = new Tree();
tree.insert(10);
tree.insert(20);
tree.insert(5);
console.log(tree);
public static void invertArray() {
    int[] arr = { 1, 0, 1, 0, 0, 1 };
    for (int i = 0; i < arr.length; i++) {
        arr[i] = (arr[i] > 0) ? 0 : 1;
    }


public static void fillArray() {
    int[] arr = new int[100];
    for (int i = 1; i < arr.length; i++) {
        arr[i] = i++;
    }


public static void changeArray() {
    int[] arr = { 1, 5, 3, 2, 11, 4, 5, 2, 4, 8, 9, 1 };
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] < 6)
        arr[i] = arr[i] * 2;
    }


public static void fillDiagonal() {
    int[][] arr = new int[4][4];
    for (int i = 0; i < 4; i++) {
    for (int j = 0; j < 4; j++) {
        arr[i][i] = 1;
        arr[i][n - i - 1] = 1
    }



    public static void 5(int length, int initialValue){
        int[] arr = new int[length];
        for (int i = 0; i < length; i++) {
            arr[i] = initialValue;
            System.out.print("[" + i + "]" + arr[i] + " ");
        }


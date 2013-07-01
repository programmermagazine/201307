#include <stdio.h>
#include <math.h>

double gen(int n) {
    double p=1.0, p1=1.0, c=1.0, c1=1.0;
    int t;
    for (t=1; t<=n; t++) {
        c = 2.0+sin(t);
        p = ((c-c1)/c1)*0.8*p1 + p1;
        printf("t=%d : c=%6.2f p=%6.2f\n", t, c, p);
        c1 = c;
        p1 = p;
    }
}

int main() {
    gen(1000);
}

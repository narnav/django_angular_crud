export default interface IStudent {
  id?: number;
  sName: string;
  age: number;
  user?: number;
}

// user =models.ForeignKey(User,on_delete=models.SET_NULL,null=True)

// id = models.BigAutoField(primary_key=True)
// sName = models.CharField(max_length=20)
// age = models.FloatField()

from django.db import models

# Create your models here.
class EmployeeData(models.Model):
    EmpNo=models.IntegerField(max_length=42)
    EmpName=models.CharField(max_length=50)
    Designation=models.CharField(max_length=50)
    Salary=models.IntegerField(max_length=50)


    def __str__(self):
        return self.EmpName

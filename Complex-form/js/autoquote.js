        $(document).ready(function () {

            $('#Contactfrom').formValidation({
                framework: 'bootstrap',
                icon: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    FirstName: {
                        validators: {
                            notEmpty: {
                                message: 'The First Name is required'
                            }
                        }
                    },
                    LastName: {
                        validators: {
                            notEmpty: {
                                message: 'The Last Name is required'
                            }
                        }
                    },
                    BirthDay: {
                        validators: {
                            notEmpty: {
                                message: 'The BirthDay is required'
                            }
                        }
                    },
                    Email: {
                        validators: {
                            notEmpty: {
                                message: 'The Email or Phone is required'
                            }
                        }
                    },
                    ZipCode: {
                        validators: {
                            notEmpty: {
                                message: 'The Zip Code is required'
                            }
                        }
                    },
                    Address: {
                        validators: {
                            notEmpty: {
                                message: 'The Address is required'
                            }
                        }
                    },
                    Comment: {
                        validators: {
                            notEmpty: {
                                message: 'The Comment is required'
                            }
                        }
                    }

                }
            });


        });

        function uniqId() {
            return Math.round(new Date().getTime() + (Math.random() * 100));
        }

        function GenerateDrivers() {
            var Uniqueid = uniqId();
            var AppendHtml = "";
            AppendHtml += "<div id=\"divdriver_" + Uniqueid + "\" class=\"col-sm-12 form-group\">";
            AppendHtml += " <div class=\"col-sm-3\"><input  type=\"text\" class=\"form-control\" id=\"txtDriver_FirstName_" + Uniqueid + "\"></div>";
            AppendHtml += " <div class=\"col-sm-3\"><input type=\"text\" class=\"form-control\" id=\"txtDriver_LastName_" + Uniqueid + "\"></div>";
            AppendHtml += " <div class=\"col-sm-2\"><input type=\"text\" class=\"form-control\" id=\"txtDriver_Birthday_" + Uniqueid + "\"></div>";
            AppendHtml += " <div class=\"col-sm-3\">";
            AppendHtml += "     <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio_" + Uniqueid + "\">Yes</label>";
            AppendHtml += "     <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio_" + Uniqueid + "\">No</label>";
            AppendHtml += " </div>";
            AppendHtml += " <div class=\"col-sm-1\"><a type=\"button\" class=\"btn btn-default addButton\" onclick=\"RemoveDrivers('" + Uniqueid + "')\" href=\"javascript:;\"><i class=\"fa fa-minus\"></i></a></div>";
            AppendHtml += "</div>";
            $("#pnlDriver").append(AppendHtml);
        }

        function RemoveDrivers(id) {
            $("#divdriver_" + id).remove();
        }

        function GenerateCars() {
            var Uniqueid = uniqId();
            var AppendHtml = "";
            AppendHtml += "<div id=\"divcar_" + Uniqueid + "\"  class=\"col-sm-12 form-group\">";
            AppendHtml += "<div class=\"col-sm-3\"><input id=\"txtCar_Year_" + Uniqueid + "\" class=\"form-control\" type=\"text\" /></div>";
            AppendHtml += "<div class=\"col-sm-3\"><input id=\"txtCar_Make_" + Uniqueid + "\" class=\"form-control\" type=\"text\" /></div>";
            AppendHtml += "<div class=\"col-sm-2\"><input id=\"txtCar_Model_" + Uniqueid + "\" class=\"form-control\" type=\"text\" /></div>";
            AppendHtml += " <div class=\"col-sm-3\">";
            AppendHtml += " <input id=\"txtCar_Distance_" + Uniqueid + "\" class=\"form-control\" type=\"text\" />";
            AppendHtml += "</div>";
            AppendHtml += "<div class=\"col-sm-1\"><a href=\"javascript:;\" onclick=\"RemoveCars('" + Uniqueid + "')\" class=\"btn btn-default addButton\" type=\"button\"><i class=\"fa fa-minus\"></i></a></div>";
            AppendHtml += "</div>";
            $("#pnlcar").append(AppendHtml);
        }

        function RemoveCars(id) {
            $("#divcar_" + id).remove();
        }
